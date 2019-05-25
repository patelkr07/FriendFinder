
var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var friends = [
    {
        name: "Jacob",
        score: 89
    },

    {
        name: "Jessica",
        score: 35
    },

    {
        name: "Paul",
        score: 19
    }
]

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;

    console.log(chosen);

    for (var i= 0; i < friends.length; i++) {
        if (friend === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    return res.send("No friends found");
});


app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);

    res.send(body)
});

}