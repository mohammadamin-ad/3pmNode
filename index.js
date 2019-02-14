var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function (request, response) {
    const Telegram = require('telegram-node-bot')
    const TelegramBaseController = Telegram.TelegramBaseController
    const tg = new Telegram.Telegram('654161883:AAF60D7Go8fmkYuEy0oBXEQ-5jFtvORS0tg')
    class GreetingController extends TelegramBaseController {
        /**
         * @param {Scope} $
         */
        greetingHandler($) {
            $.sendMessage('Hey, how are you?')
        }
        get routes() {
            return {
                'hey': 'greetingHandler',
                'hi': 'greetingHandler',
                'hello': 'greetingHandler',
            }
        }
    }
    tg.router
        .when(['hey', 'hi', 'hello'], new GreetingController())

});
app.listen(app.get('port'), function () {

    console.log('Node app is running on port', app.get('port'));
});


