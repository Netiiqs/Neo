const Discord = require('discord.js');
const { once } = require('events');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const config = require('./config.js');

const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventsFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

for (const file of eventsFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, Discord));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, Discord));
	}
};

client.login(config.token)
	.then(console.log(`# Bot redémarré manuellement.`));