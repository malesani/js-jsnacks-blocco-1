//inserisci un numero
var cont = []


for(var i = 0; i < 6; i++)
{
  var num = parseInt(prompt ("digita un numero"))
  console.log(num)
  
  if(num % 2 != 0)
  {
    cont.push(num);
  }

}

console.log(cont)