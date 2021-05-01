'use strict';

/*var texts = $.get('who.txt', function(response) {  //line 2
    var outerScopeVar = "123";
},"text");
console.log(texts);
*/
var firstPart, middlePart, endPart;
$.ajax({
    type: 'GET',
    async: false,
    url: "WHO.txt",
    success: function(data) { firstPart = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "WHAT.txt",
    success: function(data) { middlePart = data.split(/\r?\n/);}
  });
  $.ajax({
    type: 'GET',
    async: false,
    url: "ENDOFSENTENCE.txt",
    success: function(data) { endPart = data.split(/\r?\n/);}
  });
  firstPart.length;
  function generateSentence(){
    let randomNumbers = [Math.floor(Math.random() * 50),Math.floor(Math.random() * 50),Math.floor(Math.random() * 50)];
    document.getElementById("sentence").innerHTML = firstPart[randomNumbers[0]] + " " + middlePart[randomNumbers[1]] + " " + endPart[randomNumbers[2]];
}
document.getElementById("generate").addEventListener("click",generateSentence);