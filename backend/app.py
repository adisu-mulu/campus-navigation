from flask import Flask, g
from routes import api
from flask_cors import CORS
from flask_pymongo import PyMongo

def create_app():

     app = Flask(__name__)
     CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}},
     headers=['Content-Type', 'Authorization'])

     
     # Configuration: Update the URI with your MongoDB server details.
     app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/alx"  # replace localhost if your MongoDB is hosted elsewhere
     mongo = PyMongo(app)
     # Store mongo in Flask's g (global context)
     @app.before_request
     def before_request():
          g.mongo = mongo  # This makes mongo available globally in the app

     # Register the blueprint
     app.register_blueprint(api, url_prefix='/api')

     return app

if __name__ == "__main__":
     app = create_app()
     app.run(host='0.0.0.0', port=5000, debug=True)
