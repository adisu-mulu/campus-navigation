from flask import Blueprint, jsonify
import json

api = Blueprint('api', __name__)

# Load locations data
with open('data/locations.json') as f:
    locations = json.load(f)

@api.route('/locations', methods=['GET'])
def get_locations():
    return jsonify(locations)

@api.route('/directory', methods=['GET'])
def get_directory():
    # Example hardcoded directory data
    directory = [
        {"name": "Library", "contact": "library@university.edu", "location": "Building A"},
        {"name": "Student Services", "contact": "services@university.edu", "location": "Building B"}
    ]
    return jsonify(directory)
