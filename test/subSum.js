const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('subSum.js', () => {
	it('should return 11 with for (2, 2)', mochaAsync(async () =>{
		const subSum = require('../exercises/subSum');

		try{
			const result = subSum.run(2, 2);
			result.should.be.a('number');
			result.should.equal(11);
		}
		catch(err){
			throw err;
		}
	}));
	it('should return 6 with for (1, 2)', mochaAsync(async () =>{
		const subSum = require('../exercises/subSum');

		try{
			const result = subSum.run(1, 2);
			result.should.be.a('number');
			result.should.equal(6);
		}
		catch(err){
			throw err;
		}
	}));
	it('should return 9 with for (2, 1)', mochaAsync(async () =>{
		const subSum = require('../exercises/subSum');

		try{
			const result = subSum.run(2, 1);
			result.should.be.a('number');
			result.should.equal(9);
		}
		catch(err){
			throw err;
		}
	}));
});
