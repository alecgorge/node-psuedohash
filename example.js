var psuedo = require('./psuedohash');

for(var i = 0; i < 1000; i++) {
	console.log(psuedo.udihash(i));
}

