const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apidata = require("apiRoutes.js";)

const app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});