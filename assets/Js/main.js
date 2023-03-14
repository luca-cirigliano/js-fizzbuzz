
/* 
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:

- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Bonus 1: crea un container nella DOM, aggiungendo con append un elemento html con il numero e la stringa corretta da mostrare

*/


/* strumenti: 
class.list.add <---- cerca 
*/
const conatainerEl = document.querySelector('.container')


for (let i = 1; i <= 100; i++) {
    const divEl =document.createElement('div')
    //per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        divEl.append('Fizzbuzz')
        divEl.style.backgroundColor='green'
        /* - per i multipli di 3 stampi “Fizz” al posto del numero */
    } else if (i % 3 === 0) {
        console.log('Fizz');
        divEl.append('Fizz')
        divEl.style.backgroundColor='antiquewhite'
        divEl.style.color='black'
        /* - per i multipli di 5 stampi “Bizz” al posto del numero */
    } else if (i % 5 === 0) {
        console.log('Buzz')
        divEl.append('Buzz')
        divEl.style.backgroundColor='red'
    }else{
        console.log(i)
        divEl.append(i)
    }
conatainerEl.append(divEl)
}
//Bonus 1: crea un container nella DOM, aggiungendo con append un elemento html con il numero e la stringa corretta da mostrare


/* const ulElement = document.createElement("ul");
console.log(ulElement)

const bodyElement = document.querySelector("body")
bodyElement.append(ulElement) */


/* console.log(i);
const liElement = document.createElement("li")
console.log(liElement)
liElement.append(i)
console.log(liElement)
ulElement.append(liElement)
console.log(ulElement)
 */