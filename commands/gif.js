const fetch = require('node-fetch');
const dotenv = require("dotenv");

module.exports = {
    name: 'gif',
    description: 'envoie un gif',
    aliases: ['gifs', 'meme'],
    permissions: [],
    async execute (msg, args, client, discord) {

        const tokens = msg.content.split(" ");

        const keywords = tokens.slice(1, tokens.length).join(" ");

        const url = `https://api.tenor.com/v1/search?q=${keywords}&key=Y5K6J9FOYJDW&limit=10`;

        const response = await fetch(url);
        const result = await response.json();

        const index = Math.floor(Math.random() * result.results.length);

        msg.channel.send(result.results[index].url);
        }
    };