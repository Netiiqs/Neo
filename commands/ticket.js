module.exports = {
    name: 'ticket',
    aliases: ['tickets'],
    permissions: [],
    description: 'Ouvrez un ticket!',
    async execute(message, args, cmd, client, discord){
        const channel = await message.guild.channels.create(`❗┃ticket: ${message.author.username}`);

        channel.setParent('877234668833996861');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
        });

        const reactionMessage = await channel.send(`Merci d\'avoir contacté le support <@${message.author.id}>, un <@&782699213196755024> va bientôt arriver !`);

        try {
            await reactionMessage.react ("🔒");
            await reactionMessage.react ("⛔");
        } catch (err) {
            channel.send('problème avec les émojis');
            throw err;
        }

        const collector = reactionMessage.createReactionCollector((reaction, user) => 
          message.guild.members.cache.find((members) => members.id === user.id).hasPermission('ADMINISTRATOR'),
          {dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case "🔒":
                    channel.updateOverwrite(message.author, { SEND_MESSAGES: false})
                    break;
                case "⛔":
                    channel.send('Ce channel sera supprimé dans 5 secondes !')
                    channel.send('Nous espérons que votre problème a été résolu, bon jeu !')
                    setTimeout(() => channel.delete(), 5000)
                    break;
            }
        });
    
        message.channel.send('Un channel a été créé, vous y trouverez de l\'aide !')
        .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
            throw err;
        });
    },
};