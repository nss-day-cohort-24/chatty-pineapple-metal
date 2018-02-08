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


        let darkMsg = document.getElementsByClassName("msg");
        darkMsg.className = "darkMsg";



        // darkTheme.classList.toggle("darkContainer");





      }
      else {
          console.log("dark unchecked");
          let lightTheme = document.getElementById("main-back");

          lightTheme.className = "container";


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


