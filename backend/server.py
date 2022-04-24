from contextlib import nullcontext
from dataclasses import dataclass
from email import header
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin
import json
from flask_jwt import JWT, jwt_required, current_identity
from sqlalchemy import true
from  sqlalchemy.sql.expression import func, select
from sqlalchemy.exc import IntegrityError
from datetime import timedelta 
import random
from grabber import read_words
import contextlib
from sqlalchemy import MetaData


from models import db, User, Words

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    app.config['SECRET_KEY'] = "MYSECRET"
    app.config['JWT_EXPIRATION_DELTA'] = timedelta(days = 7)
    app.config['CORS_HEADERS'] = 'Content-Type'
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
@cross_origin(supports_credentials=True)
def signup():
    userdata = request.json()

    newuser = User(username=userdata[0])
    newuser.set_password(userdata[1]) 
    try:
        db.session.add(newuser)
        db.session.commit() 
    except IntegrityError: 
        db.session.rollback()
        resp = jsonify('username or email already exists')
        resp.headers.add("Access-Control-Allow-Origin", "*")
        return resp
    resp = jsonify('user created')
    resp.headers.add("Access-Control-Allow-Origin", "*")
    return resp

@app.route('/login', methods=['POST'])
def login():
    user = request.json
    return authenticate(user[0], user[1])
    

@app.route('/worddata', methods=['GET'])
def game():
    rand = random.randint(1, 3000)
    word = Words.query.filter_by(id=rand).first()
    return(word.word)




app.run(host='0.0.0.0', port=8080)