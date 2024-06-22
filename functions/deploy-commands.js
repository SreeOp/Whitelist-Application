const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    // Add your command data here
    // Example: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!').toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
