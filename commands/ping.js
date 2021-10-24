module.exports = {
    name: 'ping',
    aliases: ['ms', 'latency'],
    execute: (message, args, client, Discord) => {
        message.channel.send('Loading ...').then(async (msg) => {
            msg.delete();
            message.channel.send(`J'ai ${msg.createdTimestamp - message.createdTimestamp}ms.`);
        });
    },
};