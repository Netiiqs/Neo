const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member, client, Discord){

        const channel = member.guild.channels.cache.find(ch => ch.name === '🚀┃𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚');
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

        • Tu peux lire les règles du serveur dans le channel #⛔┃𝙍𝙚𝙜𝙡𝙚𝙨
        • Tu peux voir les évenements dans le channel #📣┃𝘼𝙣𝙣𝙤𝙣𝙘𝙚𝙨
        • Les commandes du BOT sont dans le channel #🤖┃𝙗𝙤𝙩-𝙝𝙚𝙡𝙥
        • Tous les liens sont dans le channel #📋┃𝙇𝙞𝙚𝙣𝙨
        
        ★───────────── ✨ 𝐴𝑚𝑢𝑠𝑒𝑧-𝑣𝑜𝑢𝑠 𝑏𝑖𝑒𝑛 ! ✨ ─────────────★`)
        .setFooter('✘')
        .setTimestamp();
        
        channel.send(embed);
    },
};