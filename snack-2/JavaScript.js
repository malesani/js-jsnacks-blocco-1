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