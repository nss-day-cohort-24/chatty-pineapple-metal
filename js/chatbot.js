"use strict";
console.log("chatbox js is loading");

//Goal: On initial page load, load 5 messages into the chatbox.

//Get the JSON data//

////Store the url of the JSON in a variable
const messageURL = 'json/chatbot.json';

////Create a Request
let jsonRequest = new XMLHttpRequest();

////Insuring the request is successful


let dataRequestComplete = (event) => {
    console.log("The data transfer is complete, we have the data.");
    let data = JSON.parse(event.target.responseText);
    console.log("bot messages:", data);
    return data;
};

console.log("data is outside", dataRequestComplete);

function dataRequestFailed(event) {
    console.log("There was an error");
}

jsonRequest.addEventListener("load", dataRequestComplete);
jsonRequest.addEventListener("error", dataRequestFailed);

////Open a new request
jsonRequest.open('GET', messageURL);
console.log("Getting data");

////Set the responseType to JSON so that XHR knowns that the server will be returning JSON and that it should be converted behind the scenes into JS
// jsonRequest.responseType = 'json';
// console.log("The data is an json array");

////Send the request
jsonRequest.send();
console.log("Sent the request");

//Event Listeners for XMLHttpRequest//



console.log('XML Request:', jsonRequest);
console.log('XML Request response:', jsonRequest.response);

// let botMessages = jsonRequest.response; // stores the response to our request in a variable


// //Output message to chatbox//

// let chatbox = document.getElementById("chatbox");

// let newBotMsg = document.createElement('p'); 
// console.log("created new p element for message");

// newBotMsg.textContent = botMessages.welcome;
// console.log("set the textContent to botMessages.welcome");

// chatbox.appendChild(newBotMsg);
// console.log("append the text to the chatbox section");

console.log("chatbot has loaded");

