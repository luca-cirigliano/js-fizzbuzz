
/* 
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:

- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questo
esercizio?

*/


/* strumenti: 

*/

const ulElement = document.createElement("ul");
console.log(ulElement)

const bodyElement = document.querySelector("body")
bodyElement.append(ulElement)

for (let i = 0; i < 101; i++) {

    console.log(i);
    const liElement = document.createElement("li")
    console.log(liElement)
    liElement.append(i)
    console.log(liElement)
    ulElement.append(liElement)
    console.log(ulElement)

}
