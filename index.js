//Modules required
var cool = require("cool-ascii-faces");
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var Datastore = require("nedb");
var cors = require("cors");

//Variables
var app = express();
var port = (process.env.PORT || 10000);

//Server usages
app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname,"public")));

//APIs

var hivAPI = require("./src/back/hivAPI/v2");
hivAPI.init(app);

//========================F02 /cool====================
app.get("/cool", (request,response) => {
	response.send(cool());
	console.log("New request to /cool has arrived");
});

app.listen(port,() => {
	console.log("Server already listening on port " + port);
});
