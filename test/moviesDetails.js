const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('moviesDetails.js', () => {
	it('should return all the movie details', mochaAsync(async () =>{
		const moviesDetails = require('../exercises/moviesDetails');
		moviesDetails.mockApi(require('../mock-api/axios-success'));

		try {
			const result = await moviesDetails.run([`Mr. Nobody`, `The Greatest Showman`, `Pulp Fiction`]);

			result.should.be.a('array');
			result.length.should.equal(3);

			result[0].should.be.a('object');
			result[0].should.have.property('Title');
			result[0].Title.should.equal('Mr. Nobody');
			result[0].should.have.property('Year');
			result[0].Year.should.equal('2009');
			result[0].should.have.property('Genre');
			result[0].Genre.should.equal('Drama, Fantasy, Romance, Sci-Fi');

			result[1].should.be.a('object');
			result[1].should.have.property('Title');
			result[1].Title.should.equal('The Greatest Showman');
			result[1].should.have.property('Year');
			result[1].Year.should.equal('2017');
			result[1].should.have.property('Genre');
			result[1].Genre.should.equal('Biography, Drama, Musical');

			result[2].should.be.a('object');
			result[2].should.have.property('Title');
			result[2].Title.should.equal('Pulp Fiction');
			result[2].should.have.property('Year');
			result[2].Year.should.equal('1994');
			result[2].should.have.property('Genre');
			result[2].Genre.should.equal('Crime, Drama');
		}
		catch(err){
			throw err
		}
	}));
});
