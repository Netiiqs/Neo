const prefix = "!";

module.exports = {
    name: 'message',
    once: false,
    execute(message, client, Discord){
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        let args = message.content.slice(prefix.length).split(/ +/);
        let commandName = args.shift().toLowerCase();
    
        let command = getCommand(commandName, client);
        if (command) {
            command.execute(message, args, client, Discord);
        }

    },
};

function getCommand(commandName, client) {
	let returned = client.commands.get(commandName);
	if (!returned)  {
		client.commands.forEach(element => {
			if (element.aliases.includes(commandName)) {
				returned = element;
			}
		});
	}
	return returned;
}