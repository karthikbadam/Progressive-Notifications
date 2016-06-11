var cache = {};

//polychrome
var polychrome;

var startTime = Date.now();

function randomString(len, charSet) {
    len = len || 10;
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

var device = "AWARENESS";

var deviceId = randomString();

var queryStacks = {};

//crime dataset
// Crime
var crimeMeta = {};
crimeMeta["id"] = "id";
crimeMeta["date"] = "CrimeDate";
crimeMeta["code"] = "CrimeCode";
crimeMeta["time"] = "CrimeTime";
crimeMeta["location"] = "Location";
crimeMeta["description"] = "Description";
crimeMeta["weapon"] = "Weapon";
crimeMeta["post"] = "Post";
crimeMeta["district"] = "District";
crimeMeta["neighborhood"] = "Neighborhood";
crimeMeta["lat"] = "Latitude";
crimeMeta["lon"] = "Longitude";

var crimeMargins = {};
crimeMargins["id"] = 20;
crimeMargins["date"] = 120;
crimeMargins["code"] = 20;
crimeMargins["time"] = 20;
crimeMargins["location"] = 120;
crimeMargins["description"] = 140;
crimeMargins["weapon"] = 80;
crimeMargins["post"] = 30;
crimeMargins["district"] = 80;
crimeMargins["neighborhood"] = 140;
crimeMargins["lat"] = 20;
crimeMargins["lon"] = 20;
