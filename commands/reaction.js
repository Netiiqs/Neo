const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reaction',
    aliases: [],
    permissions: [],
    channelID: '896332399120642118',
    roles: [
        ["929124211799261244", '929129757960986633'],
        ["929130745040097291", '929129762138497044'],
    ],
    async execute(message, args, client, discord) {
        let channel = await message.guild.channels.cache.get(this.channelID);

        let embed = new MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle(`Accès aux différentes sections du Discord DreamFire`)
            .setDescription(`

            <:CSGO:929129757960986633> <@&929124211799261244> → Permet d'accéder à la partie du Discord consacrée
                                                  à nos serveurs CS:GO !

            <:CSS:929129762138497044> <@&929130745040097291> → Permet d'avoir accès à la section du Discord réservée
                                             à nos serveurs CS:S !
            
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
