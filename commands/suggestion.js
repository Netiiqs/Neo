const { embed } = require('discord.js');

module.exports = {
    name: 'suggestion',
    description: 'CrΓ©er une suggestion!',
    aliases: ['suggest', 'suggestion', 'suggestions'],
    permissions: [],
    execute(message, args, client, discord) {

        const channel = message.guild.channels.cache.find(c => c.name === 'π‘βπΊππππππππππ');

        let laDate = new Date();
        
        let phrases = ["propose une idΓ©e :", "partage son idΓ©e :", "a une suggestion :", "propose :", "vient d'avoir un Γ©clair de gΓ©nie :", "suggΓ¨re :", "demande :", "propose un changement :"];
        let random = Math.floor(Math.random() * 8);
        let textTitre = message.author.username + " " + phrases[random];

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(textTitre, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs)
            .setFooter('β Un avis ? β')
            .setTimestamp();

        channel.send(embed).then((msg) => {
            msg.react('877232437900496977');
            msg.react('877232461078204426');
            message.delete();
            console.log(`
            ββββββββββββββββββββββββββββββββββββ
            Nouvelle suggestion :
            Auteur : ${message.author.username}
            Suggestion : ${messageArgs}
            Heure : ${laDate.getHours() + 'h' + laDate.getMinutes()}
            ββββββββββββββββββββββββββββββββββββ
            `);
        });
    },
};
