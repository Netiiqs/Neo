const { embed } = require('discord.js');

module.exports = {
    name: 'suggestion',
    description: 'Créer une suggestion!',
    aliases: ['suggest', 'suggestion', 'suggestions'],
    permissions: [],
    execute(message, args, client, discord) {

        const channel = message.guild.channels.cache.find(c => c.name === '💡┃𝑺𝒖𝒈𝒈𝒆𝒔𝒕𝒊𝒐𝒏𝒔');

        let laDate = new Date();
        
        let phrases = ["propose une idée :", "partage son idée :", "a une suggestion :", "propose :", "vient d'avoir un éclair de génie :", "suggère :", "demande :", "propose un changement :"];
        let random = Math.floor(Math.random() * 8);
        let textTitre = message.author.username + " " + phrases[random];

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(textTitre, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs)
            .setFooter('↓ Un avis ? ↓')
            .setTimestamp();

        channel.send(embed).then((msg) => {
            msg.react('877232437900496977');
            msg.react('877232461078204426');
            message.delete();
            console.log(`
            ╔══════════════════════════════════╗
            Nouvelle suggestion :
            Auteur : ${message.author.username}
            Suggestion : ${messageArgs}
            Heure : ${laDate.getHours() + 'h' + laDate.getMinutes()}
            ╚══════════════════════════════════╝
            `);
        });
    },
};
