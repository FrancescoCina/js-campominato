/*
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/

// PASSAGGI LOGICI
/*
// PREPARAZIONE
1- Creazione Array per numeri casuali (da 1 a 16);
2- Randomizzazione numeri casuali e inserimento in Array / No numeri doppi (function includes / isInArray);
3- Creazione Array per storare i numeri del giocatore;
4- Creazione Array per storare il punteggio del giocatore, ogni volta che non trova la bomba guadagna un punto;

// GIOCO
1- Prompt all'utente per richiedere un numero compreso tra 1 e 100 <-- while con contatore (condizione finale i < 100 - arrayNumeriCasuali.length ) che richiede ogni volta / No numeri doppi (function isInArray);
2- Se non prende una bomba glielo richiedo; (function isInArray);

// ALLA FINE DELLA PARTITA
1- Se il numero utente corrisponde ad uno dei numeri interni all'Array, GAME OVER per l'utente, con stampa punteggio ottenuto (lenght dell'array PUNTEGGIO);
2- Se utente va in fondo per tutti i livelli (stampa HAI VINTO);
*/

let casualArray = "";

for (var i = 0; i < 16; i++) {
    var currentNumber = randomizeNumber(1, 100) + ",";
    casualArray += currentNumber;
}

casualArray = casualArray.split(",");
casualArrayWithoutLastElement = casualArray.pop();
// console.log(casualArray);

while (casualArray.includes(currentNumber)) {
    for (var i = 0; i < 16; i++) {
        var currentNumber = randomizeNumber(1, 100) + ",";
        casualArray += currentNumber;
    }
}

console.table(casualArray);

let playerNumberArray = "";

let playerScoreArray = "";


// for (var i = 0; i < 100 - casualArray.length; i++) { ///// --> For funzionante per le 84 volte che dovrò chiedere il numero all'utente


for (var i = 0; i < 5; i++) {
    do {
        var playerNumber = prompt("Inserisci un numero tra 1 e 100");
    } while (playerNumber <= 0 || playerNumber > 100 || isNaN(playerNumber))
    playerNumberArray += parseInt(playerNumber);

    console.log("Numero scelto dal giocatore", playerNumber);

}

playerNumberArray = playerNumberArray.split("");
console.table(playerNumberArray);

/* if (playerNumberArray.includes(playerNumber)) {
    for (var i = 0; i < 5; i++) {
        do {
            var playerNumber = prompt("Inserisci un numero tra 1 e 100");
        } while (playerNumber <= 0 || playerNumber > 100 || isNaN(playerNumber))
        playerNumberArray += parseInt(playerNumber);

        console.log("Numero scelto dal giocatore", playerNumber);

    }
} */





// FUNZIONI
// Funzione per randomizzare numero

function randomizeNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

// TODO --> Funzione per capire se un numero è presente in un array (alternativa ad includes)

/* function isInArray(element, arr) {

} */

// --------------------------------------------