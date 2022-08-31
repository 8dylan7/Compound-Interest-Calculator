from calendar import month
from typing import final
from flask import Blueprint, render_template, request, flash

compound = Blueprint('compound', __name__)


@compound.route('/compound', methods=['GET', 'POST'])
def compound_page():
    return render_template("compound.html")
