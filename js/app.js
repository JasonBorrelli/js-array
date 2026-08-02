/*
1.
Stampa i numeri da 1 a 10 usando un ciclo for.
*/

for (let i = 1; i <= 10; i++)
    console.log(i);
console.log("-----------")
/*


2.
Stampa i numeri da 1 a 10 usando un ciclo while.

*/

let x = 1;
while (x < 10 + 1)
    console.log(x++)
console.log("-------------")


/*
3.
Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.
*/


let N = Number(prompt("Inserisci un numero: "));

for (let i = 1; i <= N; i++)
    console.log(i)