const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');
describe('errorHandlingI.js', () => {
	it('should return error properly', mochaAsync(async () => {
		const errorHandling = require('../exercises/errorHandlingI');
		errorHandling.mockApi(require('../mock-api/axios-fail'));
		try{
			await errorHandling.run();
			throw new Error ('sooper dooper pooper scooper');
		}
		catch(err){
			err.should.equal('Request failed with status code 401')
		}
	}));
});
