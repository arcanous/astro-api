var sendMessage = require('./fbMessage/sendMessage');


module.exports = function (senderId, optin) {
    

    sendMessage(senderId, {
        text : "Debug: " + JSON.stringify(optin)
    });


};