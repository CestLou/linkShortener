var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models/index.js');
var Hashids = require("hashids"),
    hashids = new Hashids("this is my salt");

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
	res.render('index');
})

app.post('/create', function(req, res) {
	db.ShorteningURLS.create(req.body).done(function(err, data) {
		var hashed = hashids.encode(data.id);
		data.updateAttributes({shortenedHash: hashed}).done(function(finalLink){
			res.render('create',{hash: hashed})
		})
	})
})

app.get('/:shortenedHash', function(req, res) {
	var index = req.params.shortenedHash
	//[where] in the command below needs to be a string.
	db.ShorteningURLs.find({ where: {shortenedHash: index} }).then(function(URL){
	  ShorteningURLs.shortenedHash= URL
	  task.save().success(function() {});
	  res.render('results');
	})
})

app.listen(3000);