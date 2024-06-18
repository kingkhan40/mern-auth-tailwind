const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


try {
  mongoose.connect('mongodb+srv://user:12345@cluster.lpyfn6n.mongodb.net/hello');
  console.log("Database Connected Successfully");
} catch (error) {
  console.log(error)
}

//user schema 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  User.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user })
      } else {
        res.send({ message: "wrong credentials" })
      }
    } else {
      res.send("not register")
    }
  })
});
app.post("/Register", (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" })
    } else {
      const user = new User({ name, email, password })
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: "sucessfull" })
        }
      })
    }
  })


})

PORT = 6969

app.listen(PORT, () => {
  console.log("our server listening on " + PORT)
})