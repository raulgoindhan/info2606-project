from dataclasses import dataclass
from flask import Flask, request
import json

app = Flask(__name__)

global data

@app.route('/')
def default():
    return null