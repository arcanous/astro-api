var request = require('request');
var token = require('./config/appToken');


module.exports = function sendMessage(recipientId, messageData) {
  // messageData = {
  //   text:text
  // }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token:token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
};