/*CICLI FOR E WHILE*/


/*1.Stampa i numeri da 1 a 10 usando un ciclo for.*/

/*  for (let i = 1; i <= 10; i++)
    console.log(i);
console.log("-----------1") */



/* 2.Stampa i numeri da 1 a 10 usando un ciclo while.*/

/* let x = 1;
while (x < 10 + 1)
    console.log(x++)
console.log("-------------2")
 */



/*3.Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo for.*/


/* let N = Number(prompt("Inserisci un numero: "));

for (let i = 1; i <= N; i++)
    console.log(i)
console.log("------------- 3") */

/*4.Chiedi un numero N all'utente. Stampa i numeri da 0 a N usando un ciclo while.*/

/* let num = Number(prompt("Inserisci un numero: "));

let i = 0;
while (i < num + 1)
    console.log(i++)
console.log("------------4") */

/*5.Stampa la tabellina del 5.*/

/* 
for (let i = 0; i <= 50; i += 5)
    console.log(i)


 */


/*6.Chiedi all'utente una parola e un numero N. Stampa quella parola N volte.*/
/* 
const parola = prompt("inserisci una parola");
const numero = Number(prompt("inserisci un numero"));
console.log(numero, parola);

for (let i = 1; i <= numero; i++) {
    console.log(parola)
    
} */




/* 7.Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato */
/* 
const numeri = Number(prompt("Inserisci un numero: "));
let somma = 0;
for (let i = 1; i <= numeri; i++) {
    somma = somma + i;
}
console.log(somma);
 */

/* 8.Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finchÃ© l'utente non inserisce "0" per terminare. Stampa il totale della spesa */

/* let PREZZO = Number(prompt("Inserisci il prezzo del prodotto: "));

if (PREZZO === 0) {
    console.log("Totale: 0");
} else {
    let somma = 0;
    while (PREZZO !== 0) {
        somma += PREZZO;
        PREZZO = Number(prompt("Inserisci il prezzo del prodotto: "));
    }
    console.log("Il totale della spesa è di € : " + somma + " ");
}
 */

/*L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"*/

/* const password = 1234;
let tentativi = 0;

while (tentativi < 3) {
    const inserita = Number(prompt("Inserisci la password:"));
    tentativi++;

    if (inserita === password) {
        console.log("Benvenuto");
        break;
    }

    if (tentativi === 3) {
        console.log("Bloccato");
    }
}

 */

/*10.Il computer pensa a un numero tra 1 e 100. L'utente indovina. Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.*/

/* const numPc = Math.floor(Math.random() * 100) + 1;
let numeroUtente = 0;

console.log("Indovina il numero tra 1 e 100!");

while (numeroUtente !== numPc) {
    numeroUtente = Number(prompt("Inserisci un numero:"));

    if (numeroUtente < numPc) {
        console.log("Troppo basso");
    } else if (numeroUtente > numPc) {
        console.log("Troppo alto");
    }
}
console.log("Bravo! Hai indovinato il numero: " + numPc);
*/



/* ARRAY */


/*1.Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/


/* 
const numeriDispari = []
for (let i = 0; i < 6; i++) {
    const numeroUtente = Number(prompt("inserisci un numero"));

    if (numeroUtente % 2 != 0) {
        numeriDispari.push(numeroUtente);
    }
}
console.log(numeriDispari)
*/

/* 2.Dato l'array di numeri , crea un array con soli numeri pari*/

/* const numeri = [10, 21, 6, 73, 9, 14, 44, 8];
const numPari = []
for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i]
    if (numero % 2 == 0) {
        console.log(numeri[i])
        numPari.push(numero)
    }
}
console.log(numPari);
 */

/*3.Dato un array di temperature settimanali [19, 21, 18, 23, 25, 22, 20], trova il valore massimo e trova il valore minino*/

/* const temperature = [19, 21, 18, 23, 25, 22, 20];
const tempMin = Math.min(...temperature);
const tempMax = Math.max(...temperature);
console.table("la temperatura minima è " + tempMin + " gradi " + "e la temperatura massima è " + tempMax + " gradi"); */


/*4.Dato l'array di voti [6, 8, 4, 9, 5, 7, 10], calcolare la media dei voti. */

const voti = [6, 8, 4, 9, 5, 7, 10];
const media = voti.reduce((tot, voto) => tot + voto, 0) / voti.length

console.log(media)






