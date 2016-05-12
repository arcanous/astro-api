var sendMessage = require('./fbMessage/sendMessage');
var fbMessage = require('./fbMessage/fbMessage');

var handleBotCommands = require('./handleBotCommands');

var debugMode = require('./config/debugMode');

module.exports = function (senderId, message) {
    
    var messageText = message.text;

    //if (debugMode.getDebugMode(senderId)) {
        var textReply = new fbMessage
            .PlainText("[DEBUG] SenderId: " + senderId + " Message JSON: " + JSON.stringify(message))
            .compose();

        sendMessage(senderId, textReply);
    //}


    // if (messageText.toLowerCase().substr(0, 5) === '@bot ') {


    //     sendMessage(senderId, {
    //         text : "@bot command received..."
    //     });

    //     handleBotCommands({
    //         senderId : senderId,
    //         command : messageText.toLowerCase().substr(5)
    //     });

    // }














};