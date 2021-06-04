from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class UserRecipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120),unique=False, nullable=False)
    ingredients = db.Column(db.String(800), unique=False, nullable=False)
    instructions = db.Column(db.String(800), unique=False, nullable=False)
    descriptions = db.Column(db.String(800), unique=False, nullable=False)

    def __repr__(self):
        return '<UserRecipe %r>' % self.title 

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "ingredients":self.ingredients,
            "instructions":self.instructions,
            # do not serialize the password, its a security breach
        }