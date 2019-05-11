const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('sample.js', () => {
	it('should return Hello World', mochaAsync(async () => {
		const sample = require('../exercises/sample');
		try{
			const result = sample.run();
			result.should.equal('Hello World');
		}
		catch(err){
			throw err
		}
	}));
});
