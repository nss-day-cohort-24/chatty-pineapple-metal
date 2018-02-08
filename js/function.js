"use strict";
let formJS = require("./form");

let output = document.getElementById("message-contain");

// on enter keypress
let enter = function enter(event) {
    console.log("function js is here");
    event.preventDefault();
    if (event.keyCode === 13) {
        formJS.messageSubmit();
    } else if (event.keyCode != 13) {
        return;
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