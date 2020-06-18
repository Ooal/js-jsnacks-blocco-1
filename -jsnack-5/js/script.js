/*JSNACK 5
Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.
N.B. trascura pure i controlli!*/

var printBtn = document.getElementById('print');

printBtn.addEventListener ("click" , function () {
var primonum = parseInt(document.getElementById('num1').value);
var secondonum = parseInt(document.getElementById('num2').value);
var operazione = document.getElementById('operazione').value;
var risultato;

if (operazione == "Somma") {
  risultato = (primonum + secondonum);
} else if (operazione == "Sottrai") {
  risultato = (primonum - secondonum);
} else if (operazione == "Moltiplica") {
  risultato = (primonum * secondonum);
} else {
  risultato = (primonum / secondonum);
}

document.getElementById('result').innerHTML = risultato;

})
