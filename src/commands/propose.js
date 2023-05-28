const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('propose')
		.setDescription('returns a proposal line!'),
};