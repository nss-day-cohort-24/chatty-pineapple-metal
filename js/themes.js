"use strict";

function myFunction() {
    console.log("test");

    let darkCheck = document.querySelector('#checkDark');
    let largeCheck = document.querySelector("#checkLarge");


    darkCheck.addEventListener('change', changeDarkHandler);
    largeCheck.addEventListener('change', changeLargeHandler);



    
  function changeDarkHandler(){

    // CHECKBOX ON
      if(darkCheck.checked) { 
        console.log("DARK");
        //Changes background color
        let darkTheme = document.getElementById("main-back");
        darkTheme.className = "darkContainer";


        //Changes message bubble color
        let darkMsg = document.getElementsByClassName("msg");
        console.log(darkMsg, darkMsg.length);
        for (let i = darkMsg.length - 1; i >= 0; --i) {
          darkMsg.item(i).className = "darkMsg";
        }


//         // Changes button colors

        let agroBtnContainer = document.getElementById("agroBtns");
        let darkBtn = agroBtnContainer.getElementsByTagName("button");

        for (let i = 0; i < darkBtn.length; i++) { 
          darkBtn[i].classList.add("darkButton");
        }

        // Changes 'Messeages' heading color
        let msgHeader = document.getElementById("heading");
        msgHeader.className = "headerDark";

        // Change paragraph text color
        let pgText = document.getElementsByTagName("p");
        for (let i = 0; i < pgText.length; i++) {
          pgText[i].classList.add("darkP");
          console.log("test");
        }

        // Change delete button color
        let deleteBtn = document.getElementsByClassName("delete");
        for (let i = deleteBtn.length - 1; i >= 0; --i) {
          deleteBtn.item(i).className = "deleteDark";
        }



        console.log("got iT?");
          
      }

      // CHECKBOX OFF
      else {
          console.log("dark unchecked");
          let lightTheme = document.getElementById("main-back");  
          lightTheme.className = "container";

          let darkMsg = document.getElementsByClassName("darkMsg");
          console.log(darkMsg, darkMsg.length);
          for (let i = darkMsg.length - 1; i >= 0; --i) {
            darkMsg.item(i).className = "msg";
          }

          let agroBtnContainer = document.getElementById("agroBtns");
          let darkBtn = agroBtnContainer.getElementsByTagName("button");
  
          for (let i = 0; i < darkBtn.length; i++) { 
            darkBtn[i].classList.remove("darkButton");
          }

          let msgHeader = document.getElementById("heading");
          msgHeader.className = "headerLight";

          let pgText = document.getElementsByTagName("p");
          for (let i = 0; i < pgText.length; i++) {
            pgText[i].classList.remove("darkP");
            console.log("test");

            let deleteBtn = document.getElementsByClassName("deleteDark");
            for (let i = deleteBtn.length - 1; i >= 0; --i) {
              deleteBtn.item(i).className = "delete";
            }



          
          }
      }
    }

    function changeLargeHandler(){
        if(largeCheck.checked) {
          console.log("LARGE");



        }
        else {
            console.log("large unchecked");




        }
      }


}


module.exports = {myFunction};


