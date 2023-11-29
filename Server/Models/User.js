const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		posts: {type: Array},
		saved: {type: Array}
	},
	{ collection: 'user-data' }
)

const User = mongoose.model('User', UserSchema)

module.exports = User 