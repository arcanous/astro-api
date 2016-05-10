
var swisseph = require ('swisseph');
var _ = require('underscore');

var helioPlanetList = require('../config/helioPlanetsList');

var flag = swisseph.SEFLG_HELCTR;

// path to ephemeris data
swisseph.swe_set_ephe_path ('node_modules/swisseph/ephe');


module.exports = function (time) {


    var planetList = [];

    //adjust the hour
    time.hour = time.hour - time.gmt + time.minute / 60; 


    // Julian day
    swisseph.swe_julday(time.year, time.month, time.day, time.hour, swisseph.SE_GREG_CAL, function (julday_ut) {


        _.each(helioPlanetList, function (data, planet) {
            

            swisseph.swe_calc_ut (julday_ut, data.flag, flag, function (body) {
                
                if (!body.error) {
                    planetList.push({
                        "name"      : planet,
                        "distance"  : body.distance,
                        "lat"       : body.latitude,
                        "long"      : body.longitude
                    });
                }

            });


        });

    });



    return planetList;


};