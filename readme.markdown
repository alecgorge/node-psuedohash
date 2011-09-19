#PsuedoHash
A simple hashing algorithm for integers.

##Credits
Ported to a CommonJS and Node.js compatibile module by Alec Gorge ( http://alecgorge.com http://ramblingwood.com )

Original algorithm by Kevin Burns Jr. at http://blog.kevburnsjr.com/php-unique-hash

##Usage
See `example.js` and the output `example-output.txt`.

##Even quicker sample:
Code:

	var psuedo = require('./psuedohash');

	for(var i = 1; i < 11; i++) {
		console.log(psuedo.udihash(i));
	}

Output:

	cJio3
	EdRc6
	qxAQ9
	TGtEC
	5ac2F
	huKqI
	KE3eL
	wXmSO
	YrVGR
	BBE4U

