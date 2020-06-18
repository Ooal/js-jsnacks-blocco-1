/*JSNACK 6 - Bonus
Nella pagina c'è un bottone#lanciaMoneta.
Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
Se il numero è pari mostra un img con la testa della moneta.
Se è dispari mostra un'altra img con la croce della moneta.*/

var printBtn = document.getElementById('lanciaMoneta');

printBtn.addEventListener ("click" , function () {
var moneta = document.getElementById('moneta');
var num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
moneta.classList.remove("testa" , "croce");

if (!(num % 2)) {
  moneta.classList.add("testa");
} else {
  moneta.classList.add("croce");
}


})
