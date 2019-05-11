
const Promise = require('bluebird');

let axios = function(){};

axios.prototype.get = function() {
	return Promise.reject(new Error('Request failed with status code 401'));
};

module.exports = function(){ return new axios(); };
