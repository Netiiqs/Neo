const Pagination = require('../utils/pagination.js');

module.exports = {
    name: 'help',
    description: 'Liste commandes / events du bot',
    aliases: ['aide', 'commandes', 'commande'],
    permissions: [],
    async execute(message, args, client, discord) {

        const channel = message.guild.channels.cache.find(c => c.name === '🤖┃𝘽𝙤𝙩');
        const msg = await channel.messages.fetch('902231012627591208');

        const page1 = new discord.MessageEmbed()
            .setTitle('Bienvenue sur commande d\'aide')
            .setDescription(`
            Vous pouvez naviguer de pages en pages avec les réactions sous le message.
            Le !help reste 1 minute, après cela il se supprimera.

            La page n°2 liste les commandes.
            La page n°3 liste les évenements.
            `);

        const page2 = new discord.MessageEmbed()
            .setTitle('Liste des commandes')
            .setDescription(`
            ╔═══════════════════ ✘ ═══ ✘ ═══════════════════╗

            ✘ !suggestion "votre suggestion" → Envoie votre suggestion dans le channel 
            adéquat, les autres membres pourront ensuite donner leur avis en réagissant 
            au message. Un membre du STAFF répondra à l'idée pour faire savoir si c'est 
            possible ou non.
            
            ✘ !ticket → Créé un channel privé entre vous et le STAFF pour discuter d'un 
            problème sur nos serveurs, d'un joueur louche... Prenez ça comme un !calladmin 
            ou vous pouvez expliquer en détail ce qu 'il se passe.
            
            ✘ !gif "thème" → Envoie un GIF avec le thème que vous voulez, attention à 
            ne pas mettre d'accentuation, sinon rien ne se passera.

            ✘ !help → Envoie ce message ci, listant tout ce que le BOT peut effectuer
            (commandes, évenements) sur ce Discord.

            ✘ !liens → Envoie un message avec les liens utiles en rapport avec la DreamFire

            ✘ !ping → Affiche le ping du BOT, totalement inutile on est d'accord.
            
            ╚═══════════════════ ✘ ═══ ✘ ═══════════════════╝ `);

        const page3 = new discord.MessageEmbed()
            .setTitle('Liste des évenements')
            .setDescription(`
            ╔═══════════════════ ✘ ═══ ✘ ═══════════════════╗

            ✘ Message de bienvenue → Envoie un message de bienvenue aux nouveaux
            arrivants sur le Discord.
            
            ✘ Prise de rôles → Vous pouvez acquérir des rôles grâce au BOT, dans
            le channel #🎭┃𝙍𝙤𝙡𝙚𝙨, cependant il vous empêchera de prendre prisonnier
            ET gardien.
            
            ✘ Mention du BOT → Vous n'aimez pas quand on vous ping, le BOT aussi.
            Quand vous le mentionnez il vous envoie chier, normal.
            
            ╚═══════════════════ ✘ ═══ ✘ ═══════════════════╝`);


        const pages = [
            page1,
            page2,
            page3
        ];

        const emoji = ["⏪", "⏩"];

        new Pagination(message, pages, emoji, 60000).send();

        msg.reactions.resolve(...emoji).users.remove(...emoji);
    },
};