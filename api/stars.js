
var swisseph = require ('swisseph');
var _ = require('underscore');

var starsListConfig = require('../config/starsList');

var flag = swisseph.SEFLG_SPEED | swisseph.SEFLG_MOSEPH;

// path to ephemeris data
swisseph.swe_set_ephe_path ('node_modules/swisseph/ephe');

var starName = 'Regulus';






module.exports = function (time) {


	var starsList = [];


	//adjust the hour
	time.hour = time.hour - time.gmt + time.minute / 60; 



	// Julian day
	swisseph.swe_julday(time.year, time.month, time.day, time.hour, swisseph.SE_GREG_CAL, function (julday_ut) {


		_.each(starsListConfig, function (star) {

			swisseph.swe_fixstar_ut (star.name, julday_ut, flag, function (body) {

				starsList.push({
					star : star.name,
					altName : body.name.replace(star.name + ',' ,''),
					lat : body.latitude,
					long : body.longitude

				});
				

			});


		});




	});



	return starsList;


};