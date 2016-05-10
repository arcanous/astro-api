var sendMessage = require('./sendMessage');


var listOfOptions = {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"START_CHATTING"
          }
        ]
      }
    }
    };



module.exports = function (req, res) {

  messaging_events = req.body.entry[0].messaging;
  
  for (i = 0; i < messaging_events.length; i++) {
    
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    recipient = event.recipient.id;


    //messages
    if (event.message && event.message.text) {
      text = event.message.text;
      // Handle a text message from this sender

      sendMessage(sender, listOfOptions);

    }


    //messaging_postbacks
    if (event.postback && event.postback.payload) {

        sendMessage(sender, {
            text : 'very well! i\'m listening...'
        });

    }

    //messaging_optins
    if (event.optin && event.optin.ref) {



    }


    //message_deliveries
    if (event.delivery && event.delivery.watermark) {



    }


  }

  res.sendStatus(200);

};