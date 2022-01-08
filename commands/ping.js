module.exports = {
    name: 'ping',
    aliases: ['ms', 'latency'],
    execute: (message, args, client, Discord) => {

        const channel = message.guild.channels.cache.find(c => c.name === '🔧┃𝑩𝒐𝒕');
        channel.send('Loading ...').then(async (msg) => {
            msg.delete();
            channel.send(`J'ai ${msg.createdTimestamp - message.createdTimestamp}ms.`);
        });
    },
};
