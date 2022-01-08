const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member, client, Discord){

        const channel = member.guild.channels.cache.find(ch => ch.name === '🚀┃𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒖𝒆');
        if (!channel) return;

        const mb = `${member.user.username}`
        
        let messageAccueil = [`Bienvenue à toi, ${mb} !`, `Voici un nouvel arrivant : ${mb}`, `On accueille ${mb} !`,
        `Tiens, ça faisait longtemps, ${mb} !`, `Ca ne serait pas ${mb} ?`, `Oh nan, pas ${mb} !`, `Salut à toi ${mb} !`,
        `${mb} rentre en scène !`, `${mb} vient de nous rejoindre !`];
        let random = Math.floor(Math.random() * 9);

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(messageAccueil[random], member.user.displayAvatarURL({ dynamic : true}))
        .setDescription(`
        ★── ✨ 𝐵𝑖𝑒𝑛𝑣𝑒𝑛𝑢𝑒 𝑠𝑢𝑟 𝑙𝑒 𝑠𝑒𝑟𝑣𝑒𝑢𝑟 𝑐𝑜𝑚𝑚𝑢𝑛𝑎𝑢𝑡𝑎𝑖𝑟𝑒 𝐷𝑟𝑒𝑎𝑚𝐹𝑖𝑟𝑒 !✨ ──★

        • Pour avoir accès aux sections, va dans le channel #🎭┃𝑹𝒐𝒍𝒆𝒔
        • Tu peux lire les règles du serveur dans le channel #⛔┃𝑹𝒆𝒈𝒍𝒆𝒔
        • Tu peux voir les évenements dans le channel #📣┃𝑨𝒏𝒏𝒐𝒏𝒄𝒆𝒔
        • Fait \`!help\` pour voir les commandes disponibles dans #🔧┃𝑩𝒐𝒕        
        
        ★───────────── ✨ 𝐴𝑚𝑢𝑠𝑒𝑧-𝑣𝑜𝑢𝑠 𝑏𝑖𝑒𝑛 ! ✨ ─────────────★`)
        .setFooter('✘')
        .setTimestamp();
        
        channel.send(embed);

        const addRole = member.guild.roles.cache.find(r => r.name === '🔥 Membre')
        member.roles.add(addRole);
    },
};
