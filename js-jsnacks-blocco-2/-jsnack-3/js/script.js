/*JSNACK 3
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

var numVolte = prompt("Quanti num vuoi sommare ?") ;
var sum = 0;

for (var i = 0; i < numVolte; i++) {
 var num = parseInt(prompt("Inserisci il numero"));
  sum += num;
}

console.log(sum);
