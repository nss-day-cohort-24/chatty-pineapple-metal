"use strict";
let formJS = require("./form");
let formMSG = require("./form-messages");

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


    if (num < 10){
        n = num.toString();

    
        w = "textbubble_0" + n;
        d = "delete_0" + n;  
    }
    else{
    n = num.toString();


    w = "textbubble_" + n;
    d = "delete_" + n;
    }

    
    console.log("id",n);
    
    document.getElementById("textbubble").id = w;
    document.getElementById("delete").id = d;
    
    
    
    num = num +1;
    
    };
    
    






document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {

        let bttn = event.target;
        let bttnId = event.target.id;

        if(bttn.className === "delete" || bttn.className === "deleteDark" || bttn.className === "delete-lg" ){
        let dCompare = bttnId.slice(7,10);

        let mCompare = ("textbubble_" + dCompare);

        let currentMsg = document.getElementById(mCompare);
        let msgContents =  document.getElementById(mCompare).childNodes[0].childNodes[0].innerHTML;

        currentMsg.innerHTML = "";

        let msgArray = formMSG.messages;

        let m = msgArray.indexOf(msgContents);

        formMSG.messages.splice(m, 1);
        document.getElementById(mCompare).removeAttribute("class");

        





        



    }
  }});    
  
    

module.exports = {enter, clrButton, clear, msgCount};
