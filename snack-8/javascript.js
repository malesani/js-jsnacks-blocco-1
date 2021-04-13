// dato utente 
var valor = prompt ("digita un numero di 4 cifre")


//somma di quel numero 

var numero = valor;
    cadenaNumero = numero;
     var suma = 0;
for (var i = 0; i < cadenaNumero.length; i++) {
    suma+=(parseInt(cadenaNumero.charAt(i)));
}

console.log(suma);