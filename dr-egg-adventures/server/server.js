
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const { MONGODB_URI } = require('./env');
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);

// catch all route
app.use(function (req, res) {
	res.send('Not found 404.');
});

try {
	// connect to mongodb
	mongoose.connect(
		MONGODB_URI,
		{
			useNewUrlParser: true,
		},
		err => {
			if (!err) {
				// listen to the server
				app.listen(PORT, () => {
					console.log('The server is listening to ' + PORT);
				});
			} else {
				console.log('Failed to connect to db: ', err);
			}
		}
	);
} catch (error) {
	handleError(error);
}
