"use strict";

let formMessagesJS = require("./form-messages");
let inputMessage = document.getElementById("input");
let output = document.getElementById("message-contain");

let messageSubmit = function messageSubmit(){
    
    console.log("form js is here");
    // place the subbmitted message in array
    formMessagesJS.messages.unshift(`inputMessage.innerHTML`);
    // place message in output 
    // put only 20 messages in output
    for (let i = 0; i <= 20; i++){
        output += formMessagesJS.messages[i];
    }
};

module.exports = messageSubmit;

