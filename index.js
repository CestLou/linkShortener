var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models/index.js');
var Hashids = require("hashids"),
    hashids = new Hashids("youll never catch me alive");


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
		data.updateAttributes( {shortenedHash: hashed}).done(function(err, finalLink) {
			res.render('create', {hashed: finalLink.shortenedHash} )
		})
	})
})


app.get('/:shortenedHash', function(req, res) {
	var index = req.params.shortenedHash
	db.ShorteningURLS.find( { where: {shortenedHash: index} } ).then(function(URL) {
	  res.redirect(URL.URL);
	})
})



app.listen(process.env.PORT || 3000);