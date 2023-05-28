const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('morning')
		.setDescription('Greetings!')
        .addUserOption(option=>
            option
            .setName('target')
            .setDescription("user")
            .setRequired(true)),
};