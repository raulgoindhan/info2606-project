from models import db, Words, User
from sqlalchemy.exc import IntegrityError
import csv

def read_words():
    with open("words.csv", "r") as file:
        word_dic = csv.reader(file)

        for line in word_dic:
            dic_word = Words(word=line[0])
            try:
                db.session.add(dic_word)
                db.session.commit() 
            except IntegrityError:
                db.session.rollback()
                