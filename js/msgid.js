"use strict";



let messageNum = [];

let num = 6;
let d = "";
let n = "";
let w = "";

let msg = document.getElementById("textbubble");
function deleteText(){
    msg.innerHTML = "";
    console.log("suck it JS");
    console.log();

}

function msgCount() {
// let num = formJS.messageCount;

console.log(num);
messageNum.push(num);
console.log("array", messageNum);
n = num.toString();
// n = n.toString();
console.log("n:",n);
w = "textbubble_" + n;
d = "delete_" + n;
console.log("num",num);

console.log("id",n);

document.getElementById("textbubble").id = w;
document.getElementById("delete").id = d;



num = num +1;

}







module.exports = {deleteText,msgCount}; 