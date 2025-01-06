from flask import Blueprint, jsonify, g, request
import jwt
import datetime
import json
# from app import mongo

api = Blueprint('api', __name__)


@api.route('/offices', methods=['GET'])
def get_offices():

  users_collection = g.mongo.db.offices  
  user_data = users_collection.find()  
  office_list = []
  for office in user_data:
    office_list.append({"name": office["name"], "description": office["description"], "contact":office["contact"]})
  return jsonify(office_list)


@api.route('/directory', methods=['GET'])
def get_directory():
  
    users_collection = g.mongo.db.directories  
    user_data = users_collection.find() 
    directory_list = []
    for directory in user_data:
        directory_list.append({"name": directory["name"], "position": directory["position"], "email":directory["email"], "phone": directory["phone"]})
    return jsonify(directory_list)
    
@api.route('/news', methods=['GET'])
def get_news():
  
    users_collection = g.mongo.db.news  
    user_data = users_collection.find() 
    news_list = []
    for news in user_data:
        news_list.append({"news": news["news"]})
    return jsonify(news_list)


@api.route('/announcements', methods=['GET'])
def get_announcements():
  
    users_collection = g.mongo.db.announcements  
    user_data = users_collection.find() 
    announcements_list = []
    for announcements in user_data:
        announcements_list.append({"announcements": announcements["announcement"]})
    return jsonify(announcements_list)

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    username = data['username']
    password = data['password']

    # Find user in database
    user = g.mongo.db.students.find_one({"username": username})
    if not user:
        return jsonify({"error": "Invalid username or password"}), 401

 

    # Generate JWT token
    # access_token = create_access_token(identity=str(user['_id']))

    return jsonify({
        # "token": access_token,
        "user": {
            "username": user['username'],
            "password ": user['password ']
        }
    }), 200