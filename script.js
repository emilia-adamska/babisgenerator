'use strict';
var firstPart = ["My dog", "Minister of health", "Minister of Agriculture"];
var middlePart = ["jumped on the fence", "ordered 69 vaccines", "banned farming simulator"];
var lastPart = ["because he liked to eat.", "because he refused to order Sputnik vaccine.", "to send farmers to fields."];
function generateSentence(){
    let randomNumbers = [Math.floor(Math.random() * 2),Math.floor(Math.random() * 2),Math.floor(Math.random() * 2)];
    document.getElementById("sentence").innerHTML = firstPart[randomNumbers[0]] + " " + middlePart[randomNumbers[1]] + " " + lastPart[randomNumbers[2]];
    
}
document.getElementById("generate").addEventListener("click",generateSentence);
//#db1f2d