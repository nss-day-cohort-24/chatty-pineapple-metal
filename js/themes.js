// "use strict";

// function myFunction() {
//     console.log("test");

//     let darkCheck = document.querySelector('#checkDark');
//     let largeCheck = document.querySelector("#checkLarge");


//     darkCheck.addEventListener('change', changeDarkHandler);
//     largeCheck.addEventListener('change', changeLargeHandler);



    
//   function changeDarkHandler(){
//       if(darkCheck.checked) {
//         console.log("DARK");
//         //Changes background color
//         let darkTheme = document.getElementById("main-back");
//         darkTheme.className = "darkContainer";


//         //Changes message bubble color
//         let darkMsg = document.getElementById("msgId");
//         darkMsg.className = "darkMsg";

//         // Changes button colors

//         let agroBtnContainer = document.getElementById("agroBtns");
//         let darkBtn = agroBtnContainer.getElementsByTagName("button");

//         for (var i = 0; i < darkBtn.length; i++) { 
//           darkBtn[i].classList.add("darkButton");
//         }

//         // Changes 'Messeages' heading color
//         let msgHeader = document.getElementById("heading");
//         msgHeader.className = "headerDark"


//         console.log("got iT?");
          



//       }
//       else {
//           console.log("dark unchecked");
//           let lightTheme = document.getElementById("main-back");  
//           lightTheme.className = "container";

//           let darkMsg = document.getElementById("msgId");
//           darkMsg.className = "msg";

//           let agroBtnContainer = document.getElementById("agroBtns");
//           let darkBtn = agroBtnContainer.getElementsByTagName("button");
  
//           for (var i = 0; i < darkBtn.length; i++) { 
//             darkBtn[i].classList.remove("darkButton");
//           }

//           let msgHeader = document.getElementById("heading");
//           msgHeader.className = "headerLight"
//       }
//     }

//     function changeLargeHandler(){
//         if(largeCheck.checked) {
//           console.log("LARGE");



//         }
//         else {
//             console.log("large unchecked");




//         }
//       }


// }


// module.exports = {myFunction};


