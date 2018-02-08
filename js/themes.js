"use strict";

function myFunction() {
    console.log("test");

    let darkCheck = document.querySelector('#checkDark');
    let largeCheck = document.querySelector("#checkLarge");


    darkCheck.addEventListener('change', changeDarkHandler);
    largeCheck.addEventListener('change', changeLargeHandler);



    
  function changeDarkHandler(){
      if(darkCheck.checked) {
        console.log("DARK");
        let darkTheme = document.getElementById("main-back");
        darkTheme.className = "darkContainer";

        let darkMsg = document.getElementById("msgId");
        darkMsg.className = "darkMsg";


        
        console.log("got tttttthis?");
          


      }
      else {
          console.log("dark unchecked");
          let lightTheme = document.getElementById("main-back");
          lightTheme.className = "container";

          let darkMsg = document.getElementById("msgId");
          darkMsg.className = "msg";


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


