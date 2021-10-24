const { channelID, roles } = require("../commands/reaction.js")

module.exports = {
    name: 'messageReactionRemove',
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
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role[0])
            }
        }
    }
}