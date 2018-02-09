"use strict";

console.log("main js is here");

let funcJS = require("./function");
let formJS = require("./form");
let chatbot = require("./chatbot");
let themes = require("./themes");
let msg = require("./msgid");

dltBtn = document.getElementsByClassName("delete");
////////// dom stuff

// formJS.messageSubmit();
// funcJS.enter();
// funcJS.clear();

//on page load, load chatbot
document.getElementById("chatbox").addEventListener("load", chatbot.chat);
// enter press function
document.getElementById("input").addEventListener("keypress", funcJS.enter);
// on click function
document.getElementById("user-submit").addEventListener("click", formJS.messageSubmit);
// on click clear
// document.getElementById("clear").addEventListener("click", funcJS.clear);
// on click give unique IDs
document.getElementById("user-submit").addEventListener("click",funcJS.msgCount);
// themes functionality
// themes.myFunction();
// on click, delete appropriate text bubble
// .addEventListener("click",funcJS.deleteMsg);



