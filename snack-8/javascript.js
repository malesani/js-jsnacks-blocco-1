// dato utente 
var valor = prompt ("digita un numero di 4 cifre")


//somma di quel numero 

var numero = valor;
    cadenaNumero = numero.toString();
    suma=0;
for (var i = 0; i < cadenaNumero.length; i += 1) {
    suma+=(+cadenaNumero.charAt(i));
}

console.log(suma);