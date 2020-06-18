/*JSNACK 3
Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.*/

var printBtn = document.getElementById('print');

printBtn.addEventListener ("click" , function () {
var pColore = document.getElementById('colore');
var num = parseInt(prompt("inserisci un numero"));

if (num > 0) {
  pColore.className = "verde";
} else if (num < 0) {
  pColore.className = "rosso";
} else {
  pColore.className = "blu";
}

})
