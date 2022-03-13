
function calculer() 
{ 
    let a = document.getElementById("display").value 
    let b = eval(a) 
    document.getElementById("display").value = b 
} 

function afficher(val) 
{ 
  var myString =   document.getElementById("display").value
  var lastChar = myString[myString.length - 1]
  if (myString.length <= 18) {
      if(val=='.' && !canIAddDot()){
      return;   
  }
      else
      if (!isNaN(lastChar) || lastChar == null || !isNaN(val)) {
        document.getElementById("display").value = myString + val 
      }else{
        document.getElementById("display").value = myString.replace(lastChar, val)
      }   
  }
} 

function effacer() 
{ 
  document.getElementById("display").value = "" 
} 

function delet() {
    let x = document.getElementById("display");
    x.value = x.value.substring(0, x.value.length - 1);
  }
 

  function canIAddDot()
{
    const regex=/(^\d+$)|(^(\d+.{0,1}\d)([-+/]?(\d+.?\d))[*-+/]\d+$)/gm;
    return document.getElementById("display").value.match(regex);


}