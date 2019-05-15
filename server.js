// load the things we need
var express = require('express');
var app = express();

var db = require("./models");

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
  console.log('Visit http://localhost:3000 to see the magic happen');
});
