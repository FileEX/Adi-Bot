var disc = require('./discord.io');
var logger = require('./winston');
var auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var bot = new disc.Client({token: auth.token, autorun:true});

bot.on('message', function(user,userID,channel,message,evt) {
    if (message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        args = args.splice(1);
        switch(args[0]) {
            case 'Elo':
                bot.sendMessage({to: channel, message: 'Yyy elo mordo!'});
            break;
        }
    }
});