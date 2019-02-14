
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





