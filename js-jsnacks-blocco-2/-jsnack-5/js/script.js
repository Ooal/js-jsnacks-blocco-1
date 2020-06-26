/*JSNACK 5
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.
*/
 var num = [];

 for (var i = 0; i < 6; i++) {
   var input = prompt("inserisci il " + i + "° numero");

   if (input % 2) {
     num.push(input);
   }
 }

console.log(num);
