/*JSNACK 3
Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero.*/
var num = prompt("inserisci un numero di 4 cifre");
var somma = 0;
for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
  somma += parseInt(num[i]);
}
console.log(somma);
