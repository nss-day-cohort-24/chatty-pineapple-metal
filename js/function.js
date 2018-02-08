"use strict";
let formJS = require("./form");

let output = document.getElementById("message-contain");

// on enter keypress
let enter = function(event) {
    console.log("function js is here");
    if (event.keyCode === 13) {
        event.preventDefault();
        formJS.messageSubmit();
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