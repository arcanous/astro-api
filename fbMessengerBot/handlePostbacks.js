var sendMessage = require('./fbMessage/sendMessage');


module.exports = function (senderId, postback) {
    

    sendMessage(senderId, {
        text : "Debug: " + JSON.stringify(postback)
    });



};