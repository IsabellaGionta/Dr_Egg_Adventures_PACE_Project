const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	host: 'smtp.hostinger.com',
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: 'no-reply@pwtester.com.au', // generated ethereal user
		pass: 'I~5FETlx', // generated ethereal password
	},
});

module.exports = { transporter };
