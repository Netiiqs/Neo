const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member, client, Discord){

        const channel = member.guild.channels.cache.find(ch => ch.name === 'πβπ©ππππππππ');
        if (!channel) return;

        const mb = `${member.user.username}`
        
        let messageAccueil = [`Bienvenue Γ  toi, ${mb} !`, `Voici un nouvel arrivant : ${mb}`, `On accueille ${mb} !`,
        `Tiens, Γ§a faisait longtemps, ${mb} !`, `Ca ne serait pas ${mb} ?`, `Oh nan, pas ${mb} !`, `Salut Γ  toi ${mb} !`,
        `${mb} rentre en scΓ¨ne !`, `${mb} vient de nous rejoindre !`];
        let random = Math.floor(Math.random() * 9);

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(messageAccueil[random], member.user.displayAvatarURL({ dynamic : true}))
        .setDescription(`
        βββ β¨ π΅ππππ£πππ’π π π’π ππ π πππ£ππ’π πππππ’πππ’π‘ππππ π·πππππΉπππ !β¨ βββ

        β’ Pour avoir accΓ¨s aux sections, va dans le channel #π­βπΉππππ
        β’ Tu peux lire les rΓ¨gles du serveur dans le channel #ββπΉπππππ
        β’ Tu peux voir les Γ©venements dans le channel #π£βπ¨πππππππ
        β’ Fait \`!help\` pour voir les commandes disponibles dans #π§βπ©ππ        
        
        ββββββββββββββ β¨ π΄ππ’π ππ§-π£ππ’π  ππππ ! β¨ ββββββββββββββ`)
        .setFooter('β')
        .setTimestamp();
        
        channel.send(embed);

        const addRole = member.guild.roles.cache.find(r => r.name === 'π₯ Membre')
        member.roles.add(addRole);
    },
};
