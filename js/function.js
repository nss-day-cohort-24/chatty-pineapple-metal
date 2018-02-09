"use strict";
let formJS = require("./form");

let output = document.getElementById("chatbox");

let isEmpty = document.getElementById('chatbox').innerHTML === "";

// on enter keypress
let enter = function(event) {
    if (event.keycode === 13) {
        formJS.messageSubmit();
    }
};

// clear messages
let clear = function(){
    output.innerHTML = "";
    document.getElementById("clrButton").disabled = true;
};

module.exports = {enter, clear};