"use strict";
let formJS = require("./form");

let output = document.getElementById("chatbox");

console.log("msgid is here");

let messageNum = [];

let num = 1;

let d = "";
let n = "";
let w = "";

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

// disable clear button
let clrButton = function(){
    if (output.innerHTML === ""){
        document.getElementById("Button").disabled = true;
    } else {
        document.getElementById("Button").disabled = false;
    }
};

let msgCount = function() {
    console.log("plzwork");
    console.log(num);
    // messageNum.push(num);
    // console.log("array", messageNum);
    if (num < 10){
        n = num.toString();
        // n = n.toString();
        // console.log("n:",n);
    
        w = "textbubble_0" + n;
        d = "delete_0" + n;  
    }
    else{
    n = num.toString();
    // n = n.toString();
    // console.log("n:",n);

    w = "textbubble_" + n;
    d = "delete_" + n;
    }
    // console.log("num",num);
    
    console.log("id",n);
    
    document.getElementById("textbubble").id = w;
    document.getElementById("delete").id = d;
    
    
    
    num = num +1;
    
    };
    
    

let deleteMsg = function(){
    
    // msg.innerHTML = "";
    console.log("suck it JS");


};

    
    

module.exports = {enter, clrButton, clear, msgCount, deleteMsg};
