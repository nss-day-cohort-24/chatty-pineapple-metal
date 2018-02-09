"use strict";

console.log("main js is here");

let funcJS = require("./function");
let formJS = require("./form");
let chatbot = require("./chatbot");
let themes = require("./themes");
let msgJS = require("./msgid");

////////// dom stuff

//on page load, load chatbot
document.getElementById("chatbox").addEventListener("load", chatbot.chat);
// enter press function
document.getElementById("input").addEventListener("keypress", funcJS.enter);
// on click function
document.getElementById("user-submit").addEventListener("click", formJS.messageSubmit);
// on click clear
<<<<<<< HEAD
document.getElementById("clrButton").addEventListener("click", funcJS.clear); 
=======
<<<<<<< HEAD
document.getElementById("clrButton").addEventListener("click", funcJS.clear);
=======
// document.getElementById("clear").addEventListener("click", funcJS.clear);
>>>>>>> ee536d1810d40cc484bcb671b92cf356ef960bcf
>>>>>>> master
// delete message
// document.getElementById("user-submit").addEventListener("click",msgJS.msgCount);
// themes functionality
themes.myFunction();



