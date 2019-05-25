var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/home.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

};

