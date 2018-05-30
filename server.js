const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const user = require("./app/data/friend")
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

//calls express function & sets port
const app = express();
let PORT = process.env.PORT || 3000;

///body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname,'app/public')));

//imports routes
apiRoutes(app);
htmlRoutes(app);

//lets user know what port server is listening to
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});