// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//creiamo 2 prompt
    // uno chiede pari o dispari
    // l'altro chiede un numero all'utente

// let pariDispari = prompt("scegli: pari o dispari");
let numUtente = parseInt(prompt("scrivi un numero da 1 a 5"));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomNum(){
   let pcNum = Math.floor(Math.random() * 5) + 1;
    return pcNum;
}

let randNum = randomNum();
console.log("il numero del pc è:", randNum);
console.log("il numero dell'utente è:", numUtente);
// Sommiamo i due numeri

let sum = randomNum() + numUtente;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function oddEven(number) {
    let num = "";
    if(number % 2 === 0){
        num = "pari";
    }else{
        num = "dispari"
    }
    return num;
}

var result = oddEven(sum);

console.log(result);
// Dichiariamo chi ha vinto.