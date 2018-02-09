"use strict";
let formJS = require("./form");

let output = document.getElementById("chatbox");

// on enter keypress
let enter = function(event) {
    console.log("Heeeeeey.");
    if (event.keycode === 13) {
        console.log("function js - enter is here");
        formJS.messageSubmit();
        console.log("sjdhgfsdf");
    }
};

// clear messages
let clear = function(){
    console.log("clear is here");
    output.innerHTML = "";
};

// disable clear button
let clrButton = function(){
    if (output.innerHTML === ""){
        document.getElementById("Button").disabled = true;
    } else {
        document.getElementById("Button").disabled = false;
    }
};

module.exports = {enter, clrButton, clear};