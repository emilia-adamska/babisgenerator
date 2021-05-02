  var randomNumbers = new Array();
  function getRandomNumbers(){
    for( var i = 0; i < numberOfParts.length; i++){
        randomNumbers[i] = Math.floor(Math.random() * numberOfParts[i])
    }
}
  function generateSentence(){ 
    getRandomNumbers();
    let lastItem = randomNumbers[randomNumbers.length-1];
    if(lastItem==1)
        document.getElementById("sentence").innerHTML = firstPart[randomNumbers[0]] + " " + middlePart[randomNumbers[1]] + " " + endPart[randomNumbers[2]];
    else 
    document.getElementById("sentence").innerHTML = firstPartPlural[randomNumbers[3]] + " " + middlePartPlural[randomNumbers[4]] + " " + endPart[randomNumbers[2]]
    
}
document.getElementById("generate").addEventListener("click",generateSentence);