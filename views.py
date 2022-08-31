from flask import Blueprint, render_template

# Setting up blueprint for flask application
views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template("home.html")
