/*JSNACK 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

var maggiore;
var primoNum = prompt("Scegli un numero");
var secondoNum = prompt("Scegli un numero");

if (primoNum > secondoNum) {
  maggiore = primoNum;
} else {
  maggiore = secondoNum;
}

document.getElementById('print').innerHTML = maggiore;
