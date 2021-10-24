const { channelID, roles } = require("../commands/reaction.js")

module.exports = {
    name: 'messageReactionAdd',
    once: false,
    aliases: [],
    description: "oh ta gueule",
    async execute(reaction, user, client, Discord) {

        if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id != channelID) return;

        for (let role of roles) {
            if (reaction.emoji.id === role[1]) {
				let rolesList = ['896352224626769971', '896352132108779531'];			
				let member = reaction.message.guild.members.cache.get(user.id);

				if (member.roles.cache.some(roleFind => rolesList.includes(roleFind.id)) && rolesList.includes(role[0])) {
					member.send("**ATTENTION** • Tu dois choisir soit Guardien, soit Prisonnier. Pas les deux !");
                    console.log('DM envoyé à : ', user.tag);
				} else {
					await member.roles.add(role[0]);
				};
			};
        };
    }
};