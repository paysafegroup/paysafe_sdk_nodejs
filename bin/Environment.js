/**
 * author: Anup W.
 */

var Environment = function(host, maxSocket, timeout) {
	this._host = host;
	this.maxSockets = maxSocket;
	this.timeout = timeout;
};

exports.LIVE = new Environment("https://api.paysafe.com", 10, 30000);
exports.TEST = new Environment("https://api.test.paysafe.com", 10, 30000);
exports.LOCALTEST = new Environment("localhost", 10, 30000);
exports.SBOXTEST = new Environment("https://api.sbox.paysafe.com", 10, 30000);

//module.exports = Environment;

exports.createEnv = function(host, maxSockets, timeout){
	return new Environment(host, maxSockets, timeout);
};