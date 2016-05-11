var sendMessage = require('./fbMessage/sendMessage');
var fbMessage = require('./fbMessage/fbMessage');

module.exports = function (senderId, message) {
    

    var reply = new fbMessage
                    .PlainText("Debug: " + JSON.stringify(message))
                    .compose();


    sendMessage(senderId, reply);

    // sendMessage(senderId, {
    //     text : 'So you say "' + message.text + '" ?'
    // });
    // sendMessage(senderId, {
    //     text : 'What does it even mean?'
    // });

    // sendMessage(senderId, {
    //     "attachment":{
    //       "type":"template",
    //       "payload":{
    //         "template_type":"button",
    //         "text":"Ok, I've got 3 options for you...",
    //         "buttons":[
    //           {
    //             "type":"web_url",
    //             "url":"https://www.google.com",
    //             "title":"Ask the same thing to google"
    //           },
    //           {
    //             "type":"postback",
    //             "title":"Have me do it",
    //             "payload":"LOOKUP_GOOGLE"
    //           },
    //           {
    //             "type":"postback",
    //             "title":"Stop this chat",
    //             "payload": "BYE"
    //           }
    //         ]
    //       }
    //     }
    // });





};