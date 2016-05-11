var sendMessage = require('./fbMessage/sendMessage');
var fbMessage = require('./fbMessage/fbMessage');

module.exports = function (senderId, message) {
    

    var textReply = new fbMessage
        .PlainText("Debug: " + JSON.stringify(message))
        .compose();


    sendMessage(senderId, textReply);


    var imageReply = new fbMessage
        .Image("https://s-media-cache-ak0.pinimg.com/564x/fe/3f/87/fe3f8734980b5f0075a4221e20081520.jpg")
        .compose();


    sendMessage(senderId, imageReply);



    var buttonTemplateReply = new fbMessage
        .ButtonTemplate("Which button would you like to press today")
        .addButton({
            type:   "web_url",
            title:  "www.apollo.lv",
            url:    "https://www.apollo.lv"
        })
        .addButton({
            type:       "postback",
            title:      "Postback to bot",
            payload:    "POSTBACK_SAMPLE_PAYLOAD"
        })
        .compose();

    sendMessage(senderId, buttonTemplateReply);



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