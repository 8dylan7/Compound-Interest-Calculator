from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = '32a9286e0439257c5787b092'

    from .views import views
    from .compound import compound
    from .scraper import scraper

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(compound, url_prefix='/')
    app.register_blueprint(scraper, url_prefix='/')

    return app
