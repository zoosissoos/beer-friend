const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [];

app.get("/api/:users?", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.post("/api/new", function(req, res) {

  let user = req.body;

  console.log(user);

  users.push(user);

  res.json(user);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = users;