const signup = (req, res) => {
	console.log('User signup function here.');
	// const data = req.body
	res.send('User has signed up');
};

const login = (req, res) => {
	console.log('User login function here');
	res.json({
		msg: 'User has logged in',
	});
};

module.exports = {
	signup,
	login,
};
