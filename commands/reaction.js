const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reaction',
    aliases: [],
    permissions: [],
    channelID: '896332399120642118',
    roles: [
        ["896352132108779531", '899022076122382346'],
        ["896352224626769971", '899022011580440596'],
        ["896040564414365726", '899011065038376981'],
    ],
    async execute(message, args, client, discord) {
        let channel = await message.guild.channels.cache.get(this.channelID);

        let embed = new MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle(`Réagissez aux émojis ci-dessous pour avoir vos rôles !`)
            .setDescription(`__***Explication des rôles :***__

            ✘ **Gardien / Prisonnier** → Choisissez l'un des 2 rôles afin d'avoir 
            accès à l'entièreté du Discord, ils ont les mêmes permissions !

            ✘ **Notif Ba-Jail** → Quand vous voulez jouer au ba-jail, vous pouvez 
            ping le rôle dans le channel adéquat afin de ramener des joueurs.

            <:Gardien:899022076122382346> → <@&896352132108779531>
            <:Prisonnier:899022011580440596> → <@&896352224626769971>
            <:Notification:899011065038376981> → <@&896040564414365726>
            `);

        if (message.member.hasPermission("ADMINISTRATOR")) {
            channel.send(embed).then((msg) => {
                for (let role of this.roles) {
                    msg.react(role[1]);
                };
            });
        } else {
            message.author.send('Tu ne peux pas utiliser cette commande !');
            };   
        },
};