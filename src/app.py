#src/app.py

from flask import Flask, render_template, request, send_from_directory
from .config import app_config
from .models import db, bcrypt
from flask_cors import CORS, cross_origin

#import blueprints users and blogpost
from .views.UserView import user_api as user_blueprint
from .views.BlogpostView import blogpost_api as blogpost_blueprint

def create_app(env_name):
    app = Flask(__name__)

    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    app.config.from_object(app_config[env_name])

    bcrypt.init_app(app)

    db.init_app(app)
    
    app.register_blueprint(user_blueprint, url_prefix='/api/v1/users')

    app.register_blueprint(blogpost_blueprint, url_prefix='/api/v1/blogposts')

    @app.route('/', methods=['GET'])
    @cross_origin()
    def index():
        return render_template('index.html')

    @app.route('/login', methods=['GET'])
    @cross_origin()
    def login():
        return render_template('login.html')

    @app.route('/profile', methods=['GET'])
    @cross_origin()
    def profile():
        return render_template('profile.html')

    @app.route('/js/<path:path>')
    def send_js(path):
        print("Heheheh")
        return send_from_directory('js', path)

    return app