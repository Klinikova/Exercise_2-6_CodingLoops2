var processGuesses = function ()
{
  var cntr = 0;
  var guesses = "";
  
  while (guessnum != 'stop')
    {
        cntr++;
        if (cntr == 7)
          {
              break;
          }

        var guessid = "guess" + cntr;
        var membernum = $(guessid).value;
      
        if (guessnum == 'skip')
          {
              continue;
          }
          guesses += guessnum + "<br>";
    }
   
    
  //for (cntr = 1; cntr == 7; cntr++)
      //{
          //var guessid = "guess" + cntr;
          //console.log("MID" + guessid);
          //var guessnum = $(guessid).value;
          //guesses += guessnum + "<br>"
          //$('message').innerHTML = guesses;      
        //+ "None of those numbers were correct";
      //}     
  //if (guess2 != '7')
    //{
      //$('message').innerHTML = guess2 + "None of those numbers were correct";
    //}
          //if (guess2 == '7')
        //{
          //$('message1').innerHTML = "Correct! " + guess2 + " is the number I was looking for!";
        //}
		//if (guess3 != '7')
    //{
      //$('message').innerHTML = guess3 + "None of those numbers were correct";
    //}
//}

//window.onload = function(){
  $("message").innerHTML = guesses;

}