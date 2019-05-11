module.exports = (fn) => {
	return done => {
		fn().then(done, err => {
			done(err);
		});
	};
};
