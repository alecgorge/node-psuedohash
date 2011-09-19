/**
A simple hashing algorithm for integers.

Example output for the integers 1 through 10:

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

Usage: see example.js

Ported to Javascript by Alec Gorge ( alecgorge.com ramblingwood.com )

Original by Kevin Burns Jr. at http://blog.kevburnsjr.com/php-unique-hash
*/

var chars = {
	0: 48, 1: 49, 2: 50,3: 51,4: 52,5: 53,6: 54,7: 55,8: 56,9: 57,10: 65,
	11: 66, 12: 67, 13: 68,14: 69,15: 70,16: 71,17: 72,18: 73,19: 74,20: 75,
	21: 76, 22: 77, 23: 78,24: 79,25: 80,26: 81,27: 82,28: 83,29: 84,30: 85,
	31: 86, 32: 87, 33: 88,34: 89,35: 90,36: 97,37: 98,38: 99,39: 100,40: 101,
	41: 102, 42: 103, 43: 104,44: 105,45: 106,46: 107,47: 108,48: 109,49: 110,
	50: 111, 51: 112, 52: 113,53: 114,54: 115,55: 116,56: 117,57: 118,58: 119,
	59: 120, 60: 121, 61: 122
}, golden_primes = [
	1, 41, 2377, 147299, 9132313, 566201239, 35104476161, 2176477521929
];

function base62(uint) {
	var key = [];
	while(uint > 0) {
		var mod = uint - (Math.floor(uint / 62) * 62);
		key.push(String.fromCharCode(chars[mod]));
		uint = Math.floor(uint / 62);
	}
	
	return key.reverse().join('');
}

function left_pad(str, len, chr) {
	if(str.length < len) {
		str = (new Array(len - str.length + 1).join(chr)) + str;
	}
	
	return str;
}

exports.udihash = function (num, len) {
	if(typeof len == "undefined") {
		len = 5;
	}
	
	var ceil = Math.pow(62, len),
		prime = golden_primes[len],
		dec = (num * prime) - Math.floor(num * prime / ceil) * ceil,
		hash = base62(dec);
		
	return left_pad(hash, len, "0");
}
