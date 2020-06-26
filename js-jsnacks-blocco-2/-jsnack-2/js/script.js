/*JSNACK 2
L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.*/

var primaParola = prompt("inserisci una parola");
var secondaParola = prompt("ora un'altra");

if (primaParola.length > secondaParola.length) {
  console.log(secondaParola);
  console.log(primaParola);
} else {
  console.log(primaParola);
  console.log(secondaParola);
}

})
