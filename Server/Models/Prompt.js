const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema(
	{
		id: { type: String, required: true, unique: true },
		username: {type: String, required: true},
		prompt: { type: String, required: true, unique: true },
		tags: {type: String}
	},
	{ collection: 'prompts' }
)

const Prompt = mongoose.model('Prompt', PromptSchema)

module.exports = Prompt