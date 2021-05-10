const { transporter } = require('../transport');

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

const sendForm = async (req, res) => {
	const form = req.body;

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: 'Dr.Egg <no-reply@pwtester.com.au>', // sender address
		to: form.email, // list of receivers
		subject: 'Thank you for contacting us', // Subject line
		html:
			'<p>Your message has been received us. The information is below: </p>' +
			Object.keys(form).map(key => key + ': ' + form[key] + '<br/>'),
	});

	console.log('Message sent: %s', info.messageId);

	if (info.messageId) {
		res.json({
			status: 0,
			msg: 'Mail has been sent.',
		});
	} else {
		res.json({
			status: 1,
			msg: 'Something went wrong.',
		});
	}
};

module.exports = {
	signup,
	login,
	sendForm,
};
