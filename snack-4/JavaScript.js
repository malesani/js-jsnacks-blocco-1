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