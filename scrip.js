var rndnum;
var theirQ;

function press(){
    rndnum = Math.random();
    rndnum = Math.floor(rndnum * 10);
    theirQ = "> " + document.getElementById("question").value;
    document.getElementById("question").value = "";
    document.getElementById("answer").innerHTML = theirQ + "</br>" + getWords(rndnum);
}//end press

//This function will return a sentence
// please customize it and add your own.
//please have at least 10 responses.
function getWords(number){
    switch(number){
      case 0:
        return("Hell No");
      case 1:
        return("I think so yes.");
    }
}//end getWords
