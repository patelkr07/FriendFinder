var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/home.html", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "./survey.html"));
});

}