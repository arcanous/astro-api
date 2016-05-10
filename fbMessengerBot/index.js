var request = require('request');




var token = "EAALY3w1YNhwBACBRALkIZAL20fZAlmBQUyZBgamDKaSwtXL9LFADJVAc5N7chBrJWVtxjsx10qGLkeiJZClThnUxWadx6md3ZB5FEC1jo3MUJkGRctXVhDqCNbp2TUNZBDsTOrlk9OvJ65Pts1dGYJHvJRfbdEIeDNfyPFJUMIOQZDZD";

function sendTextMessage(sender, messageData) {
  // messageData = {
  //   text:text
  // }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}



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
    if (event.message && event.message.text) {
      text = event.message.text;
      // Handle a text message from this sender

      sendTextMessage(sender, listOfOptions);

    }

    if(event.postback && event.postback.payload) {

        sendTextMessage(sender, {
            text : 'very well! i\'m listening...';
        });

    }


  }
  res.sendStatus(200);



};


