var rndnum;
var theirQ;

function press(){
    rndnum = Math.random();
    rndnum = Math.floor(rndnum * 10);
    theirQ = "> " + document.getElementById("question").value;
    document.getElementById("question").value = "";
    // this is where i want to add my timeout
    document.getElementById("myButton").style.visibility = "hidden";
    document.getElementById("answer").innerHTML = "Let me think about this.";
    setTimeout(showAnswer,3000);
}//end press

//After the timeout this function will be called, and 
//it will display the response from the 8ball
function showAnswer(){
  document.getElementById("answer").innerHTML = theirQ + "</br>" + getWords(rndnum);
  document.getElementById("myButton").style.visibility = "visible";
}//end showAnswer

//This function will return a sentence
function getWords(number){
    switch(number){
      case 0:
        return("Hell No");
      case 1:
        return("I think so yes.");
    }
}//end getWords
