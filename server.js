var express = require('express');
var app = express();
var starsApi = require('./api/stars');


app.get('/stars/:day/:month/:year/:hour/:minute/:gmt/', function (req, res) {

	
	var starsList = starsApi({
		day 	: parseInt(req.params.day),
		month 	: parseInt(req.params.month),
		year 	: parseInt(req.params.year),
		hour 	: parseInt(req.params.hour),
		minute 	: parseInt(req.params.minute),
		gmt 	: parseInt(req.params.gmt)
	});


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(starsList));	

});


app.use(function(req, res){
   res.sendStatus(400);
});


app.listen(process.env.PORT || 8000, function () {});