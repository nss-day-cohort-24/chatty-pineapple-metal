"use strict";

let formMessagesJS = require("./form-messages");


let inputMessage = document.getElementById("input");
let chatbox = document.getElementById("chatbox");

let fireFunc = function (event) {
    event.preventDefault();

    // place the subbmitted message in array
    let messageArray = formMessagesJS.messages.unshift("🔥🔥🔥");
    // display array in the dom
    chatbox.innerHTML += `<div class="msg" id="textbubble"><div class="msg-text"><p>${formMessagesJS.messages[0]}</p></div><button class="delete" id="delete">delete</button></div>`;
    // clearing input field
    inputMessage.value = "";
    // activate clear button
    document.getElementById("clrButton").disabled = false;
    // put only 20 messages in output
    // for (let i = 0; i <= 20; i++){
    // }
};

module.exports = { fireFunc };