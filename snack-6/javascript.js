//numero indica dal utente

var numero = prompt("digita un numero")

var suma = 0 

for (var i = 1; i <= numero ; i++){
  var numeri_minori = i
  var risultato = Math.pow(numeri_minori,3)
  console.log (risultato)
  suma += risultato
}

console.log("resultado de la suma " + suma);







