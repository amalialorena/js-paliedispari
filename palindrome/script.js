// Palidroma:
// Chiedere all’utente di inserire una parola
    //Creare un prompt
    //Salvare la risposta in una variabile x
// Creare una funzione per capire se la parola inserita è palindroma.
    //Trasformare il valore della variabile x in un array -> .split('') salvandolo in una nuova variabile
    //Usare il metodo reverse() per invertire l'ordine degli elementi al suo interno.
    //Trasformare l'array invertito in una stringa -> .join('')
        //Salviamo il valore in una variabile y
    //Confrontare la variabile x con la variabile y 
// Dare l’output relativo.


//Creare un prompt

let userWord = prompt("inserisci una parola");

//Trasformare il valore della variabile x in un array -> .split('') salvandolo in una nuova variabile

let wordArray = userWord.split('');
console.log(wordArray);

//Usare il metodo reverse() per invertire l'ordine degli elementi al suo interno.

let reversedArray = wordArray.reverse();
console.log(reversedArray);

//Trasformare l'array invertito in una stringa -> .join('')

let invertedWord = reversedArray.join('');
console.log(invertedWord);

//Confrontare la variabile x con la variabile y 

if(userWord === invertedWord) {
    console.log("La parola è palindroma");
}else{
    console.log("La parola non è palindroma");
}






