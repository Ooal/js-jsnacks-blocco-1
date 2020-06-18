/*JSNACK 4
Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.*/

var printBtn = document.getElementById('print');

printBtn.addEventListener ("click" , function () {
var paragraph = document.getElementById('numero');
var num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
paragraph.classList.add("pari" , "dispari");

if (!(num % 2)) {
  paragraph.classList.remove("pari");
} else {
  paragraph.classList.remove("dispari");
}

})
