/*Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23  */

/* Sturumenti :
-prompt 
-console.log
-document.getelementbyid
*/

//chiedi all'utente il nome

const userName = prompt('Inserisci il tuo nome');

//chiedi all'utente il suo cognome

const userSurname = prompt('Inserisci il tuo cognome');

//chiedi all'utente il suo colore preferito

const favoriteColor = prompt('Inserisci il tuo colore preferito');

//chiedi numero random all'utente

//let randomNumber = prompt('Inserisce un numero casuale'); andava bene ma ho provato con un generatore casuale da 0 a 100

let generatorRandomNumber = Math.floor((Math.random() * 100) +1);

//seleziona il tag tramite id in cui inserire il risultato

const passwordGeneratorElement = document.getElementById('password_generator');

//Scrivi il risultato in console

console.log('La password consigliata è' + userName + userSurname + favoriteColor + generatorRandomNumber);

//scrivi il risultato in pagina

passwordGeneratorElement.innerHTML = 'La password consigliata è ' + userName + userSurname + favoriteColor + generatorRandomNumber;