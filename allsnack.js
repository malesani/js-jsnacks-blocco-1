//snack 2
//dati
var parola_1 = prompt ("scrive la prima parola");
var parola_2 = prompt ("scrive la seconda parola");

//calcolo parola piu lunga
console.log(parola_1.length)
console.log(parola_2.length)

parola_1.length;
parola_2.length;

// calcolo
if(parola_1.length > parola_2.length){
  console.log("la parola 1 è pu lungha")
}else if (parola_1.length === parola_2.length) {
  console.log("hanno la stessa quantita di lettere")
}else{
  console.log("la parola 2 è piu lungha")
}


//snack 3
//information
var num_1 = parseInt(prompt("digita un numero"))
var num_2 = parseInt(prompt("digita un numero"))
var num_3 = parseInt(prompt("digita un numero"))
var num_4 = parseInt(prompt("digita un numero"))
var num_5 = parseInt(prompt("digita un numero"))
var num_6 = parseInt(prompt("digita un numero"))
var num_7 = parseInt(prompt("digita un numero")) 
var num_8 = parseInt(prompt("digita un numero"))
var num_9 = parseInt(prompt("digita un numero"))
var num_10 = parseInt(prompt("digita un numero"))

//calcolo

var risultato = num_1 + num_2 + num_3 + num_4 + num_5 + num_6 + num_7 + num_8 + num_9 + num_10;

console.log(risultato)


//snack 4
//dati inseriti
var nome = prompt("scrive il tuo nome")
console.log(nome)

//dati lista
var lista = [
  "alberto",
  "alejandro",
  "adrian",
  "juan",
  "jose,"
]


//controllo
for(var i = 0; i < lista.length; i++){
  if(nome === lista){
    console.log("puoi entrare")
  }else{
    console.log("vai via, sparisci")
  }
}

//snack 5
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