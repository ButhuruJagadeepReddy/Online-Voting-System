// Sir, change the database name and password.

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bhanu',
  database: 'voters'
});

app.get("/", function(req, res){
    var q = "SELECT COUNT(*) AS count FROM voters_detail";
    connection.query(q, function(err, results){
        if(err) throw err;
        var count = results[0].count;
        res.render("home", {count: count});
    });
});

app.get("/vote_count", function(req, res){
    var q = "SELECT COUNT(*) AS count FROM voters_detail";
    connection.query(q, function(err, results){
        if(err) throw err;
        var count = results[0].count;
        res.render("home", {count: count});
    });
});

app.get("/001", function(req,res){
    var q = "SELECT COUNT(*) AS new_data FROM voters_detail WHERE parties LIKE '%BJP%'";
    connection.query(q, function(err, results){
        if(err) throw err;
        var hello = results[0].new_data;
        res.send("<B> <h1 style = background-color:DodgerBlue;><Strong> <center> BJP Was Voted By " + hello + " People.</B> </center> </Strong> </h1> ");
    });
});

app.get("/002", function(req,res){
    var q = "SELECT COUNT(*) AS new_data FROM voters_detail WHERE parties LIKE '%AAP%'";
    connection.query(q, function(err, results){
        if(err) throw err;
        var hello = results[0].new_data;
        res.send("<B> <h1 style = background-color:DodgerBlue;> <Strong> <center> AAP Was Voted By " + hello + " People.</B> </center> </Strong> </h1> ");
    });
});

app.get("/003", function(req,res){
    var q = "SELECT COUNT(*) AS new_data FROM voters_detail WHERE parties LIKE '%congress%'";
    connection.query(q, function(err, results){
        if(err) throw err;
        var hello = results[0].new_data;
        res.send("<B> <h1 style = background-color:DodgerBlue;> <Strong> <center> Congress Was Voted By " + hello + " People.</B> </center> </Strong> </h1> ");
    });
});

app.post("/register", function(req, res){

     var q= "INSERT INTO voters_detail (voter_id,aadhar_id,parties) VALUES ('" + req.body.voter_id + "','" + req.body.aadhar_id + "', '" + req.body.parties + "' )"
    connection.query(q, function(err, result) {
        if (err) res.send("<B> <center> <h1> Wait Scammer, It's Time To Run A Corruption Free Government.  Don't You Dare To Scam It Again.  After 2 More False Or Duplicate Enteries , Nearest CRPF Will Be Informed. Along With Your Location and IP Address. Thank you   </h1> </center> </B>");
        else res.redirect("/");
    });
});

    app.listen(3000, function(){
    console.log(`Server running at http://${hostname}:${port}/`);

    });
