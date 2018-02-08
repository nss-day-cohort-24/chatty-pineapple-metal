"use strict";

let formMessagesJS = require("./form-messages");

let inputMessage = document.getElementById("input");
let chatbox = document.getElementById("chatbox");

let messageSubmit = function(event){
    event.preventDefault();
    console.log("form js is here");
    // place the subbmitted message in array
    let messageArray = formMessagesJS.messages.unshift(`<div><p>${inputMessage.innerHTML}</p></div>`);
    
    // display array in the dom
    chatbox.innerHTML += messageArray;
    
    
    // clearing input field
    inputMessage.innerHTML = "";
        
        // put only 20 messages in output
        // for (let i = 0; i <= 20; i++){}
        
};

module.exports = {messageSubmit};

