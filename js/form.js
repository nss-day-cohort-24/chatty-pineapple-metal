"use strict";

let formMessagesJS = require("./form-messages");

let inputMessage = document.getElementById("input");
let chatbox = document.getElementById("chatbox");

let messageSubmit = function(event){
    event.preventDefault();
    console.log("form js is here");
    // place the subbmitted message in array
    console.log("message array", formMessagesJS.messages);
    
    let messageArray = formMessagesJS.messages.unshift(inputMessage.value);

    
    console.log("message array", formMessagesJS.messages);

    // display array in the dom
    chatbox.innerHTML += `<div class="msg"><div class="msg-text"<p>${formMessagesJS.messages}</p></div><button class="delete">X</button></div>`;
        // clearing input field
    inputMessage.value = "";
        
        // put only 20 messages in output
        // for (let i = 0; i <= 20; i++){}
        
};

module.exports = {messageSubmit};

