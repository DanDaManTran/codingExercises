const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('errorHandlingII.js', () => {
	it('should return error properly', mochaAsync(async () => {
		const errorHandling = require('../exercises/errorHandlingII');
		errorHandling.mockApi(require('../mock-api/axios-fail'));
		try{
			const result = await errorHandling.run();
			result.should.equal('Error: Request failed with status code 401');
		}
		catch(err){
			throw err;
		}
	}));
});
