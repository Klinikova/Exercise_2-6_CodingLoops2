var $ = function (id) {
	return document.getElementById(id);
}

var processInfo = function ()
{
  var guess1 = $('guess1').value;
  var guess2 = $('guess2').value;
  var guess3 = $('guess3').value;
  var guesses = [guess1, guess2, guess3];
  
    for (i = 0; i < guesses.length; i++) {
        console.log(guesses[i]);
        var message = '';
        
        if (guesses[i] == '7'){
            message = "Correct! " + guesses[i] + " is the number I was looking for!";
        }  
        else
        {
            message = "None of those numbers were correct";
        }    
    }

    $('message').innerHTML = message;
}  

window.onload = function(){
    $("mybutton").onclick = processInfo;
  }
  