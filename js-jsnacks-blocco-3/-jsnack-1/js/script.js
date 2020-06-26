/*JSNACK 1
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

var num = prompt("inserisci un numero");

for (var i = 1; i <= num; i++) {
  var pot = (i**3);
  console.log(pot);
  }
