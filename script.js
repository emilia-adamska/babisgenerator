  var randomNumbers = new Array();
  function generateSentence(){
      for( var i = 0; i < numberOfParts.length; i++){
       randomNumbers[i] = Math.floor(Math.random() * numberOfParts[i])
}
    //[Math.floor(Math.random() * numberOfParts[0]),Math.floor(Math.random() * numberOfParts[0]),Math.floor(Math.random() * 50)];
    //document.getElementById("sentence").innerHTML = firstPart[randomNumbers[0]] + " " + middlePart[randomNumbers[1]] + " " + endPart[randomNumbers[2]];
}
document.getElementById("generate").addEventListener("click",generateSentence);