from contextlib import nullcontext
from dataclasses import dataclass
from flask import Flask, request, render_template
from flask_cors import CORS
import json
from flask_jwt import JWT, jwt_required, current_identity
from sqlalchemy.exc import IntegrityError
from datetime import timedelta 
from grabber import read_words

from models import db, User

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    app.config['SECRET_KEY'] = "MYSECRET"
    app.config['JWT_EXPIRATION_DELTA'] = timedelta(days = 7)
    db.init_app(app)
    return app

app = create_app()

app.app_context().push()
db.create_all(app=app)

global data

read_words()

def authenticate(uname, password):

    user = User.query.filter_by(username=uname).first()

    if user and user.check_password(password):
        return user

def identity(payload):
    return User.query.get(payload['identity'])

jwt = JWT(app, authenticate, identity)

@app.route('/api', methods=['GET'])
def default():
    return {
        'name': 'hello'
    }

@app.route('/signup', methods=['POST'])
def signup():
  userdata = request.get_json()
  newuser = User(username=userdata['username'], email=userdata['email'])
  newuser.set_password(userdata['password']) 
  try:
    db.session.add(newuser)
    db.session.commit() 
  except IntegrityError: 
    db.session.rollback()
    return 'username or email already exists' 
  return 'user created' 

@app.route('/login')
def login():
    return


app.run(host='0.0.0.0', port=8080)