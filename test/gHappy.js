const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('gHappy.js', () => {
	it('should return true for xxgggxyz', mochaAsync(async () => {
		const gHappy = require('../exercises/gHappy');

		try{
			const result = gHappy.run('xxgggxyz');
			result.should.equal(true)
		}
		catch(err){
			throw err
		}
	}));
	it('should return false for xxgggxyg', mochaAsync(async () => {
		const gHappy = require('../exercises/gHappy');

		try{
			const result = gHappy.run('xxgggxyg');
			result.should.equal(false)
		}
		catch(err){
			throw err
		}
	}));
	it('should return false for xxggyygxx', mochaAsync(async () => {
		const gHappy = require('../exercises/gHappy');

		try{
			const result = gHappy.run('xxggyygxx');
			result.should.equal(false)
		}
		catch(err){
			throw err
		}
	}));
	it('should return true for xxgggxygg', mochaAsync(async () => {
		const gHappy = require('../exercises/gHappy');

		try{
			const result = gHappy.run('xxgggxygg');
			result.should.equal(true)
		}
		catch(err){
			throw err
		}
	}));
});
