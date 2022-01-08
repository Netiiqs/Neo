const { channelID, roles } = require("../commands/reaction.js")

module.exports = {
    name: 'messageReactionAdd',
    once: false,
    aliases: [],
    description: "Ajoute un rôle quand on réagit",
    async execute(reaction, user, client, Discord) {

        if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id != channelID) return;

        for (let role of roles) {
            if (reaction.emoji.id === role[1]) {
				let rolesList = ['929124211799261244', '929130745040097291'];			
				let member = reaction.message.guild.members.cache.get(user.id);

				member.roles.add(role[0]);

			};
        };
    }
};
