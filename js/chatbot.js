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
        console.log("inside dataRequestComplete function:", data);
        showData(data);
    };

    let showData = (jsonObj) => {

        console.log('inside showData function:', jsonObj);

        let chatbox = document.getElementById('chatbox');

        for(var key in jsonObj) {
            let message = '';
            let bot = jsonObj[key];
            message += '<div id="#"';
            message += 'class="msg">';
                // console.log(message);  
            message += '<div class="msg-text"><p>' + bot.botMessage + '</p></div>';
                // console.log(message);
            message += '<button class="delete">X</button>';
                // console.log(message);
            message += '</div>';
                // console.log(message);

            chatbox.innerHTML += message;
                // console.log(chatbox.innerHTML);
        }

    };

    function dataRequestFailed(event) {
        console.log("There was an error");
    }

    //Event Listeners for XMLHttpRequest//

    jsonRequest.addEventListener("load", dataRequestComplete);
    jsonRequest.addEventListener("error", dataRequestFailed);

    ////Open a new request
    jsonRequest.open('GET', messageURL);
    console.log("Getting data");

    ////Send the request
    jsonRequest.send();
    console.log("Sent the request");

    console.log("chatbot has loaded");

  
module.exports = {dataRequestComplete}; 