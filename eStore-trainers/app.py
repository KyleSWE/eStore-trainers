from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:LEOCOOL99@localhost/DevShoes' 
db=SQLAlchemy(app)


class Data(db.Model):
    __tablename__="data"
    id=db.Column(db.Integer,primary_key=True)
    email_=db.Column(db.String(120),unique=True)
    first_=db.Column(db.String(30))
    last_=db.Column(db.String(30))
    street_=db.Column(db.String(30))
    state_=db.Column(db.String(30))
    zip_=db.Column(db.Integer)

    def __init__(self, email_, first_, last_, street_, state_, zip_):
        self.email_=email_
        self.first_ = first_
        self.last_ = last_
        self.street_ = street_
        self.state_ = state_
        self.zip_ = zip_


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=='POST':
        email=request.form["email_name"]
        first=request.form["first_name"]
        last=request.form["last_name"]
        street=request.form["street_name"]
        state=request.form["state_name"]
        zip=request.form["zip_name"]

        print(request.form)

        data=Data(email,first,last,street,state,zip)
        db.session.add(data)
        db.session.commit()

        return render_template("thankyou.html")

if __name__=='__main__':
    app.debug=True
    app.run()