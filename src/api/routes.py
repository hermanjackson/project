"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,UserRecipe
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def create_user():
    body= request.get_json()
    user = User(email=body["email"], password=body["password"],is_active=True)

    db.session.add(user)
    db.session.commit()

    return jsonify("success"), 200

@api.route('/user_recipe', methods=['POST'])
def create_user_recipe():
    body= request.get_json()
    user_recipe= UserRecipe(title=body["title"],ingredients=body["ingredients"],descriptions=body["descriptions"],instructions=body["instructions"])
    get_user_recipes=UserRecipe.query.all

    db.session.add(user_recipe)
    db.session.commit()
    return jsonify("success"), 200