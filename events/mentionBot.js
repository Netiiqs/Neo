module.exports = {
    name: 'message',
    once: false,
    execute(message, client, Discord){
        const rm = `${message.author.username}`
        
        const reponseMention = [`Retourne dans ta jail ${rm}`, `A l'ouverture des jails, tu vas arrêter de me ping ${rm}`, 
        `Très bien, t'es hostile ${rm}`, `Regarde ton ordre au lieu de me ping ${rm}.`, `Tu veux te battre ${rm} ?`,`T'es cringe ${rm}.`,
        `C'est dingue de forcer comme ça ${rm}`, `T'as pas d'autres potes ${rm} ?`, `T'es autant aimé que Ziko, ${rm}`, `Je rompiche là ${rm}`]
        let random = Math.floor(Math.random() *10)

        if (message.mentions.has(client.user)) {
            message.channel.send(reponseMention[random])
         }
    },
};