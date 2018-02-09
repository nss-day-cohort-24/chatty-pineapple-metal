"use strict";

let formMessagesJS = require("./form-messages");

let inputMessage = document.getElementById("input");
let chatbox = document.getElementById("chatbox");
let messageCount = 0;
let messageSubmit = function(event){
    event.preventDefault();

    // place the subbmitted message in array
    let messageArray = formMessagesJS.messages.unshift(inputMessage.value);

    
    // display array in the dom
    chatbox.innerHTML +=  `<div class="msg" id="textbubble"><div class="msg-text"><p>${formMessagesJS.messages[0]}</p></div><button id="delete" class="delete" name="delete">delete</button></div>`;

    // put only 20 messages in output
    // for (let i = 0; i <= 20; i++){
    // }
 
    // clearing input field
    inputMessage.value = "";

};

module.exports = {messageSubmit};

