## Import Dependencies
import os
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,inspect

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

from flask_assets import Bundle, Environment 

app = Flask(__name__)

# js = Bundle('functions.js', 'index.js', 'logic.js', output='gen/main.js')

# assets = Environment(app)

# assets.register('main.js', js)


# #################################################
# # Database Setup
# #################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/realestate_data.sqlite"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
@app.route("/")
def index():
       #"""Return the homepage."""
    return render_template ('index.html')

if __name__ == "__main__":
    app.run()
