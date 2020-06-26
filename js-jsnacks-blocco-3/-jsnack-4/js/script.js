/*JSNACK JSNACK 4
Calcola la somma e la media dei primi 10 numeri.*/

var sum = 0;
for (var i = 0; i < 10; i++) {
  var num = parseInt(prompt("dammi un num"));
  sum += num;
}
console.log(sum);
console.log(sum / 10);
