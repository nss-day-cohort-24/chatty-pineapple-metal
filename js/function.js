"use strict";
let formJS = require("./form");
let formMsg = require("./form-messages");

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




document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        let bttn = event.target;
        let bttnId = event.target.id;
        console.log(bttn);
        console.log(bttnId);
        if(bttn.className === "delete" || bttn.className === "msg-text-lg" ){
      console.log("fuckameeee");
        let dCompare = bttnId.slice(7,10);
        console.log(dCompare);
        let mCompare = ("textbubble_" + dCompare);
        console.log(mCompare);
        let currentMsg = document.getElementById(mCompare);
        currentMsg.innerHTML = "";
        let dCompInt = parseInt(dCompare);
        console.log("parsedint", dCompInt);

        console.log(messages);

        



    }
  }});    
  
    

module.exports = {enter, clrButton, clear, msgCount, deleteMsg};
