"use strict";

console.log("main js is here");

let funcJS = require("./function");
let formJS = require("./form");

////////// dom stuff

// formJS.messageSubmit();
// funcJS.enter();

// enter press function
document.getElementById("input").addEventListener("keypress", function(){
    funcJS.enter();
});
// on click function
document.getElementById("user-submit").addEventListener("click", function(){
    formJS.messageSubmit();
});
// on click clear
document.getElementById("clear").addEventListener("click", function(){
    funcJS.clear();
});




