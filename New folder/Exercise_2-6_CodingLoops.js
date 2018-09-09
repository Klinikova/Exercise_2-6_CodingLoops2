var $ = function (id) {
	return document.getElementById(id);
}

var processInfo = function ()
{
  var guess1 = $('guess1').value;
  var guess2 = $('guess2').value;
  var guess3 = $('guess3').value;
  
    
  if (guess1 != '7')
      {
        $('message').innerHTML = guess1 + "None of those numbers were correct";
      }
        if (guess2 == '7')
        {
            $('message1').innerHTML = "Correct! " + guess2 + " is the number I was looking for!";
        }

     
  if (guess2 != '7')
    {
      $('message').innerHTML = guess2 + "None of those numbers were correct";
    }
    
  if (guess3 != '7')
    {
      $('message').innerHTML = guess3 + "None of those numbers were correct";
    }
}

window.onload = function(){
  $("mybutton").onclick = processInfo;
}