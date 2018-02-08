"use strict";
console.log("chatbox js is loading");

//Goal: On initial page load, load 5 messages into the chatbox.

//Get the JSON data//

////Store the url of the JSON in a variable
const messageURL = 'json/chatbot.json';

////Create a Request
let request = new XMLHttpRequest();

////Open a new request
request.open('GET', messageURL);
console.log("Getting data");

////Set the responseType to JSON so that XHR knowns that the server will be returning JSON and that it should be converted behind the scenes into JS
request.responseType = 'json';
console.log("The data is an json array");

////Send the request
request.send();
console.log("Sent the request");

let botMessages = request.response; // stores the response to our request in a variable

console.log('line 28:', botMessages);


////Output message to chatbox
// document.getElementById("messageBox").innerText = testMsg;

