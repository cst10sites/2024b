 /* function checkAnswer() {
    var a = document.getElementById("a").checked; //T or F
    var b = document.getElementById("b").checked;
    var c = document.getElementById("c").checked;
    var d = document.getElementById("d").checked;
    // all var for id?

    if ( b== true && c== true && a == false && d ==false){
        alert("You are correct!");
    }
    else {
        alert('Try again...')
    }



}*/
var resultArray = [];


function start() {
    document.getElementById("start!!!").style.display ="none"
        document.getElementById("q1").style.display ="block"
}



    function checkAnswer1() {
    var answer = document.getElementById('answer1').value.replace(/\s+/g, '');
    // trim means to delete all spaces but doesnt work??? huh
   

    if (answer.toLowerCase() == "harryjamespotter")  {
         
         document.getElementById("q1").style.display ="none"
        document.getElementById("q2").style.display ="block"
           resultArray.push("1");   

         

    }
    else { 
         document.getElementById("q1").style.display ="none"
        document.getElementById("q2").style.display ="block"

      }
  }//end of function checkAnswer1

function checkAnswer2() {

   var answer2 = document.getElementById("answer2").value;
   
    if (answer2 == "Snape") {
         
         document.getElementById("q2").style.display ="none"
        document.getElementById("q3").style.display ="block"
              resultArray.push("2");   
           }
    
    // || means "or" - at least one condition is true to be true
    // && means "and" (from line 108) - both conditions are true to be true



else{document.getElementById("q2").style.display ="none"
        document.getElementById("q3").style.display ="block"

}
}//end of function checkAnswer2


function checkAnswer3() {

   var answer3 = document.getElementById("answer3").value;
   
    if (answer3 == "Hogwarts") {
        
         document.getElementById("q3").style.display ="none"
        document.getElementById("q4").style.display ="block"
      resultArray.push("3");   
           }
    
    // || means "or" - at least one condition is true to be true
    // && means "and" (from line 108) - both conditions are true to be true



else{
  document.getElementById("q3").style.display ="none"
        document.getElementById("q4").style.display ="block"
}//end of function checkAnswer3
}
function checkAnswer4() {
    var diary = document.getElementById("diary").checked; //T or F
    var wand = document.getElementById("wand").checked;
    var ring = document.getElementById("ring").checked;
    var locket = document.getElementById("locket").checked;
    // all var for id?

    if (diary == true && locket== true && ring == true && wand ==false){
         document.getElementById("q4").style.display ="none"
        document.getElementById("q5").style.display ="block"
             resultArray.push("4");   
        
    }
    else {
         document.getElementById("q4").style.display ="none"
        document.getElementById("q5").style.display ="block"

    }

}


    function checkAnswer5() {
    var answer = document.getElementById('answer5').value.replace(/\s+/g, '');
    // trim means to delete all spaces but doesnt work??? huh
   

    if (answer.toLowerCase() == "malfoy" || answer.toLowerCase() == "dracomalfoy" || answer.toLowerCase() == "draco")  {
         
         document.getElementById("q5").style.display ="none"
        document.getElementById("q6").style.display ="block"
      resultArray.push("5");     

         

    }
    else { 
         document.getElementById("q5").style.display ="none"
        document.getElementById("q6").style.display ="block"
    
      }
  }//end of function checkAnswer1
  function checkAnswer6() {
    var correctAnsSelected = document.getElementById('answer6').checked; // true or false

    if (correctAnsSelected == true) {
        document.getElementById("q6").style.display ="none"
          resultArray.push("6");   
         document.getElementById("result").style.display ="block"
             document.getElementById("result").style.display ="block"
        
var text = "Your score is " + resultArray.length + " out of 6 ";
document.getElementById("result").innerHTML = text;
youGood();
    }
    else {
        document.getElementById("q6").style.display ="none"

        document.getElementById("result").style.display ="block"

var text = "Your score is " + resultArray.length + " out of 6 ";
document.getElementById("result").innerHTML = text;

  youGood();
    }
}

function youGood() {
    var resultMessage = "";

    if (resultArray.length == 0) {
        resultMessage = "Nice try";
    } else if (resultArray.length == 1) {
        resultMessage = "That's okay, at least you got one right";
    } else if (resultArray.length == 2) {
        resultMessage = "You can do it better!";
    } else if (resultArray.length == 3) {
        resultMessage = "Hmm, average is great!";
    } else if (resultArray.length == 4) {
        resultMessage = "Great! You know so much about Harry Potter!";
    } else if (resultArray.length == 5) {
        resultMessage = "Oh wow, only one wrong! You must love Harry Potter";
    } else if (resultArray.length == 6) {
        resultMessage = "Impressive! You are truly a Harry Potter fan!";
    }

    document.getElementById("youGood").style.display = "block";
    document.getElementById("youGood").innerHTML = resultMessage;
}
