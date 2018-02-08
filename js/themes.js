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
      }
      else {
          console.log("dark unchecked");
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


