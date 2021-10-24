const Discord = require('discord.js');

class Pagination {

    constructor(msg, pages, emojiList = ['⏪', '⏩'], timeout = 120000) {
        this.msg = msg;
        this.pages = pages;
        this.emojiList = emojiList;
        this.timeout = timeout;

        this.page = 0;
        this.curPage = 1;
        this.reactionCollector = null;
    };

    async send() {
        if (!this.msg && !msg.channel) throw new Error('Channel inaccessible');
        if (!this.pages) throw new Error('Problème de pages');
        if (this.emojiList.length !== 2) throw new Error('Besoin de 2 emojis');

        this.curPage = await this.msg.channel.send(this.pages[this.page].setFooter(`Page ${this.page + 1} / ${this.pages.length}`));

        for (let emoji of this.emojiList) {
            await this.curPage.react(emoji);
        };

        this.reactionCollector = this.curPage.createReactionCollector(
            (reaction, user) => this.emojiList.includes(reaction.emoji.name) && !user.bot,
            { time: this.timeout }
        );

        this.reactionCollector.on('collect', reaction => {
            reaction.users.remove(this.msg.author);
            switch (reaction.emoji.name) {
                case this.emojiList[0]:
                    this.page = this.page > 0 ? --this.page : this.pages.length - 1;
                    break;
                case this.emojiList[1]:
                    this.page = this.page + 1 < this.pages.length ? ++this.page : 0;
                    break;
                default:
                    break;
            };
            this.curPage.edit(this.pages[this.page].setFooter(`Page ${this.page + 1} / ${this.pages.length}`));
        });

        this.reactionCollector.on('end', () => {
            if (!this.curPage.deleted) {
                this.curPage.reactions.removeAll();

                let modifiedEmbed = new Discord.MessageEmbed()
                    .setDescription('Minute écoulée, refaites !help');
            
                this.curPage.edit(modifiedEmbed);
            };
        });

        return this.curPage;
    };
}

module.exports = Pagination;
