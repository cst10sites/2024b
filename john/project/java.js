

      
      
    	var value = 0
      var text = 0


    	function checkValue() {
        value = 0
        
        var q1 = document.quiz.q1.value;
        var q2 = document.quiz.q2.value;
        var q3 = document.quiz.q3.value;
        var q4 = document.quiz.q4.value;
        var q5 = document.quiz.q5.value;




        if (q1 == "3 & 4") {
          value++;
        }  

        if (q2 == "Shigeru Miyamoto") {
          value++;
        }

        if (q3 == "The Plasm Wraith") {
          value++;
        } 

        if (q4 == "correctAnswer") {
          value++;
        }

        if (q5 == "w") {
          value++;
        }
        if (value < 3) {
          text = " Better luck next time!"
        } 
        else {
          text = " Congratulations!"
        } 
                   
        
        
          
      
      
      document.getElementById("test").innerHTML = value + "/5" + text;
      
}
    
    		
    	



      
      
      