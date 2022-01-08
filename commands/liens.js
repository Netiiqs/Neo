module.exports = {
    name: 'liens',
    description: 'Envoie un message Embed avec les liens DF',
    aliases: ['lien', 'forum', 'vip', 'sourceban', 'teamspeak', 'ts'],
    execute: (message, args, client, Discord) => {

      const channel = message.guild.channels.cache.find(c => c.name === '🔧┃𝑩𝒐𝒕');

        const embed = new Discord.MessageEmbed()
          .setColor('2F7FDE')
          .setAuthor(client.user.username, client.user.avatarURL({ dynamic : true}))
          .setTitle('Liste des liens DreamFire :')
          .setThumbnail('https://zupimages.net/up/21/42/9g3i.png')
          .addFields(
            { name: 'Forum', 
              value: 'https://www.dreamfire.fr/',
            },

            { name: 'VIP', 
              value: 'https://vip.dreamfire.fr/',
            },

            { name: 'Sourceban', 
              value: 'https://sourcebans.dreamfire.fr/', 
            },
            
            { name: 'TeamSpeak', 
              value: 'ts.dreamfire.fr', 
            },  
            )
          .setFooter(`✘ Demandé par ` + message.author.username, `${message.author.avatarURL({ dynamic: true})}`);
        
        channel.send(embed);
    }
};
