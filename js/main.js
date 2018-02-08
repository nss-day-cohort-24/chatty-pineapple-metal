"use strict";

let myVar = require("./function");

////////// dom stuff

// on enter keypress
function enter(event) {
    if (event.keyCode === 13) {
        messageSubmit();
    } else if (event.keyCode != 13) {
    }
}

// enter press 
document.getElementById("user-submit").addEventListener("keypress", enter);
// on click
document.getElementById("user-input").addEventListener("click", message);





