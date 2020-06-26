/*JSNACK 4
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/

var invitati = ["mario", "gigi", "fra", "ugo"];
var nome = prompt("inserisca qui il suo nome prego");
var j = false;

for (var i = 0; i < invitati.length && !j; i++) {
if (invitati[i] == nome) {
  j = true;
}
}
if (j == true) {
console.log("Sig." + nome + " il suo nome è nella lista entri pure!");
} else {
console.log("Il suo nome non è nella lista");
}
