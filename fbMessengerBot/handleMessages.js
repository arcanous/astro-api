var sendMessage = require('./fbMessage/sendMessage');
var fbMessage = require('./fbMessage/fbMessage');

module.exports = function (senderId, message) {
    

    var textReply = new fbMessage
        .PlainText("Sender: " + senderId + " Debug: " + JSON.stringify(message))
        .compose();


    sendMessage(senderId, textReply);


    var imageReply = new fbMessage
        .Image("https://s-media-cache-ak0.pinimg.com/564x/fe/3f/87/fe3f8734980b5f0075a4221e20081520.jpg")
        .compose();


    //sendMessage(senderId, imageReply);



    var buttonTemplateReply = new fbMessage
        .ButtonTemplate("Which button would you like to press today?")
        .addButton({
            type:   "web_url",
            title:  "www.apollo.lv",
            url:    "http://www.apollo.lv"
        })
        .addButton({
            type:       "postback",
            title:      "Postback to bot",
            payload:    "POSTBACK_SAMPLE_PAYLOAD"
        })
        .compose();

    //sendMessage(senderId, buttonTemplateReply);


    var genericTemplateReply = new fbMessage
        .GenericTemplate()
        .addElement({
            title:      "Classic White T-Shirt",
            image_url:  "http://petersapparel.parseapp.com/img/item100-thumb.png",
            subtitle:   "Soft white cotton t-shirt is back in style"
        })
            .addButton({
                "type": "web_url",
                "url": "https://petersapparel.parseapp.com/view_item?item_id=100",
                "title": "View Item"
            })
            .addButton({
                "type": "web_url",
                "url": "https://petersapparel.parseapp.com/buy_item?item_id=100",
                "title": "Buy Item"
            })
            .addButton({
                "type": "postback",
                "title": "Bookmark Item",
                "payload": "USER_DEFINED_PAYLOAD_FOR_ITEM100"
            })
        .addElement({
            "title": "Classic Grey T-Shirt",
            "image_url": "http://petersapparel.parseapp.com/img/item101-thumb.png",
            "subtitle": "Soft gray cotton t-shirt is back in style"
        })
            .addButton({
                "type": "postback",
                "title": "Bookmark Item",
                "payload": "USER_DEFINED_PAYLOAD_FOR_ITEM101"
            })
        .addElement({
            "title": "Some third option",
            "image_url": "https://s-media-cache-ak0.pinimg.com/564x/fe/3f/87/fe3f8734980b5f0075a4221e20081520.jpg",
            "subtitle": "Knight in mystic light"
        })   
            .addButton({
                "type": "web_url",
                "url": "https://s-media-cache-ak0.pinimg.com/564x/fe/3f/87/fe3f8734980b5f0075a4221e20081520.jpg",
                "title": "View Item"
            })                 
            .addButton({
                "type": "web_url",
                "url": "https://nl.pinterest.com/mihrandil/knighthood/",
                "title": "See gallery"
            })                 
            .addButton({
                "type": "postback",
                "title": "Do a postback",
                "payload": "ANOTHER_POSTBACK"
            })                 
            .addButton({
                "type": "postback",
                "title": "Or not",
                "payload": "ANOTHER_POSTBACK1"
            })                 
            .addButton({
                "type": "postback",
                "title": "Yet another one",
                "payload": "ANOTHER_POSTBACK2"
            })                 
        .compose();


        sendMessage(senderId, genericTemplateReply);


};