var sendMessage = require('./fbMessage/sendMessage');


module.exports = function (senderId, postback) {
    

    sendMessage(senderId, {
        text : "Debug: " + JSON.stringify(postback)
    });

    // switch (postback.payload) {


    //     case 'LOOKUP_GOOGLE':
            
    //         sendMessage(senderId, {
    //             text : 'Ok looking up...'
    //         });


    //         setTimeout(function () {
    //             sendMessage(senderId, {
    //                 text : 'Nope.. couldn\'t find anything :('
    //             });

    //         }, 3000);

    //     break;
    //     case 'BYE':
            
    //         sendMessage(senderId, {
    //             text : 'Ok cya!'
    //         });


    //     break;



    // };




};