console.log('works')

// chiedi all'utente la sua email e controlla che sia nella lista 

//const email = prompt('write your email');

//console.log(email);

// controlla che sia nella lista di chi può accedere 

let emails = ['arya.22@gmail.com', 'arya.33@gmail.com', 'arya.44@gmail.com'];
let email = 'arya.33@gmail.com';
let trovata = false;

for (let i = 0; i < emails.length; i++) {
    if (emails[i] === email) {
        trovata = true;
        break;
    }
}

console.log(trovata); 

// genera un numero casuale 