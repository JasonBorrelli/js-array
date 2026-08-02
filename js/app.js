/*
1.
Stampa i numeri da 1 a 10 usando un ciclo for.
*/

for (let i = 1; i <= 10; i++)
    console.log(i);
console.log("-----------1")
/*


2.
Stampa i numeri da 1 a 10 usando un ciclo while.

*/

let x = 1;
while (x < 10 + 1)
    console.log(x++)
console.log("-------------2")


/*
3.
Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.
*/


let N = Number(prompt("Inserisci un numero: "));

for (let i = 1; i <= N; i++)
    console.log(i)
console.log("------------- 3")
/*
4.
Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo while.
*/

let num = Number(prompt("Inserisci un numero: "));

let i = 0;
while (i < num + 1)
    console.log(i++)


console.log("------------4")

/*
5.
Stampa la tabellina del 5.
*/

for (let i = 0; i <= 50; i += 5)
    console.log(i)


console.log("-------------5")

/*
6.
Chiedi all'utente una parola e un numero N. Stampa quella parola N volte.
*/

const parola = String(prompt("Inserisci una parola: "));
const numero = Number(prompt("Inserisci un numero: "));

