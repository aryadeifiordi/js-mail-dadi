console.log('works')

// chiedi all'utente la sua email e controlla che sia nella lista 

//const email = prompt('write your email');

//console.log(email);

// controlla che sia nella lista di chi può accedere 
/*
let emails = ['arya.22@gmail.com', 'arya.33@gmail.com', 'arya.44@gmail.com'];
let email = 'arya.33@gmail.com';
let trovata = false;

for (let i = 0; i < emails.length; i++) {
    if (emails[i] === email) {
        trovata = true;
        break;
    }
}

console.log(trovata); */

// genera un numero casuale da 1 a 6 

function generaNumero(){
    return Math.floor(Math.random()* 6) +1;
    
}
/*
var Numero = generaNumero();

console.log(Numero) */

// creo due costanti per il giocatore e il computer

const computer = generaNumero();

const gamer = generaNumero();

console.log('computer', computer);

console.log('gamer', gamer);

// verifico chi ha il numero più alto 

if (computer > gamer) {
    console.log('Il computer ha un numero più alto. Il computer vince!');
} else if (computer < gamer) {
    console.log('Il gamer ha un numero più alto. Il gamer vince!');
} else {
    console.log('Il computer e il gamer hanno lo stesso numero. È un pareggio!');
}