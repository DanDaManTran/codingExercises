const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('csvToArray.js', () => {
	it('should return the correct array of objects with a csv with no spaces', mochaAsync(async () => {
		const csvToArray = require('../exercises/csvToArray');

		try{
			const result = csvToArray.run('FirstName,LastName,Age/nDan,Tran,29/nDon,Tran,25/nJasmine,Tran,13');
			result.should.be.a('array');
			result.length.should.equal(3);
			result[0].should.have.property('FirstName');
			result[0].should.have.property('LastName');
			result[0].should.have.property('Age');
			result[0].FirstName.should.equal('Dan');
			result[0].LastName.should.equal('Tran')
			result[0].Age.should.equal('29');
			result[1].should.have.property('FirstName');
			result[1].should.have.property('LastName');
			result[1].should.have.property('Age');
			result[1].FirstName.should.equal('Don');
			result[1].LastName.should.equal('Tran')
			result[1].Age.should.equal('25');
			result[2].should.have.property('FirstName');
			result[2].should.have.property('LastName');
			result[2].should.have.property('Age');
			result[2].FirstName.should.equal('Jasmine');
			result[2].LastName.should.equal('Tran')
			result[2].Age.should.equal('13');

		}
		catch(err){
			throw err
		}
	}));
	it('should return the correct array of objects with a csv with spaces', mochaAsync(async () => {
		const csvToArray = require('../exercises/csvToArray');

		try{
			const result = csvToArray.run('Company Name,Ticker Symbol,Price Paid,Quantity/nGENERAL ELECTRIC,GE,12,100/nVisa,V,100,10/nJP Morgan,JPM,13,123');
			result.should.be.a('array');
			result.length.should.equal(3);
			result[0].should.have.property('Company Name');
			result[0].should.have.property('Ticker Symbol');
			result[0].should.have.property('Price Paid');
			result[0].should.have.property('Quantity');

			result[0]['Company Name'].should.equal('GENERAL ELECTRIC');
			result[0]['Ticker Symbol'].should.equal('GE')
			result[0]['Price Paid'].should.equal('12');
			result[0]['Quantity'].should.equal('100');

			result[1].should.have.property('Company Name');
			result[1].should.have.property('Ticker Symbol');
			result[1].should.have.property('Price Paid');
			result[1].should.have.property('Quantity');

			result[1]['Company Name'].should.equal('Visa');
			result[1]['Ticker Symbol'].should.equal('V')
			result[1]['Price Paid'].should.equal('100');
			result[1]['Quantity'].should.equal('10');

			result[2].should.have.property('Company Name');
			result[2].should.have.property('Ticker Symbol');
			result[2].should.have.property('Price Paid');
			result[2].should.have.property('Quantity');

			result[2]['Company Name'].should.equal('JP Morgan');
			result[2]['Ticker Symbol'].should.equal('JPM')
			result[2]['Price Paid'].should.equal('13');
			result[2]['Quantity'].should.equal('123');
		}
		catch(err){
			throw err
		}
	}))
});
