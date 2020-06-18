/*JSNACK 2
L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.*/
var printBtn = document.getElementById('print');

printBtn.addEventListener ("click" , function () {
var nome = document.getElementById('nome').value;
var cognome = document.getElementById('cognome').value;

console.log(nome + cognome);
})
