
const Promise = require('bluebird');

let axios = function(){};

axios.prototype.get = function(endpoint) {
	if(endpoint === 'Mr. Nobody'){
		return Promise.resolve({
			data: {
				Title: 'Mr. Nobody',
				Year: '2009',
				Genre: 'Drama, Fantasy, Romance, Sci-Fi'
			}
		});
	} else if (endpoint === 'The Greatest Showman'){
		return Promise.resolve({
			data: {
				Title: 'The Greatest Showman',
				Year: '2017',
				Genre: 'Biography, Drama, Musical'
			}
		});
	} else if (endpoint === 'Pulp Fiction'){
		return Promise.resolve({
			data: {
				Title: 'Pulp Fiction',
				Year: '1994',
				Genre: 'Crime, Drama'
			}
		});
	}

};

module.exports = function(){ return new axios(); };
