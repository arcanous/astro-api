var sendMessage = require('./fbMessage/sendMessage');
var fbMessage = require('./fbMessage/fbMessage');

var handleBotCommands = require('./handleBotCommands');

var debugMode = require('./config/debugMode');

module.exports = function (senderId, message) {
    
    if (debugMode.getDebugMode(senderId)) {
        var textReply = new fbMessage
            .PlainText("Message from " + senderId + ": " + JSON.stringify(message))
            .compose();

        sendMessage(senderId, textReply);
    }


    if (message.text.toLowerCase().substr(0, 5) === '@bot ') {

        handleBotCommands({
            senderId : senderId,
            command : message.text.substr(5)
        });

    }














};