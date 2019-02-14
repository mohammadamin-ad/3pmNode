var token = '654161883:AAF60D7Go8fmkYuEy0oBXEQ-5jFtvORS0tg';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
    var result = 0;
    match[1].trim().split(/\s+/).forEach(function (i) {
        result += (+i || 0);
    })
    bot.sendMessage(msg.chat.id, result).then(function () {
        // reply sent!
    });
});