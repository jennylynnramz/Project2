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

# from flask_assets import Bundle, Environment 

app = Flask(__name__)

#Database setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///sanfrancisco.db"
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False


db = SQLAlchemy(app)
#reflect an existing database 
Base = automap_base()
#reflect the tables
Base.prepare(db.engine, reflect=True)

Real_estate = Base.classes.real_estate
Evictions = Base.classes.evictions

# engine = create_engine("sqlite:///datasets/sanfrancisco.db")
# conn = engine.connect()
# session = Session(engine)

@app.route("/")
def index():
       #"""Return the homepage."""
    return render_template ('index.html')
# @app.route("/realestate")
# def realestate():
#     real_estate = pd.read_sql('SELECT * FROM ')
#     return jsonify(real_estate)

if __name__ == "__main__":
    app.run(debug=True)
