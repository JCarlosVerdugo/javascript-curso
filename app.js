// Variable
var nameUser = "john";
let lastName = "verdugo";

nameUser = 'carlos'

const PI = 3.14;
const id = 'asdasdasd'

console.log(nameUser)
console.log(PI)

// commentary 

/**
 * Has multiples
 * lines :)
 */

// Operations
let numberOne = 60, numberTwo = 100;

let result = numberOne + numberTwo;

let newName = 'John ', newSurname = 'Carter';
let completeName = newName + newSurname;

console.log(completeName)


// switch
let typeCard = 'Debit card';

switch(typeCard) {
    case 'Debit card':
        console.log('Debit')
        break;
    case 'Credit Card':
        console.log('Credit')
        break;
    default:
        console.log('No card')
        break;
}

// loops
let count = 50;

while(count > 0) {
    count % 2 == 0 ? console.log(count) : '';
    count--;
}

const names = ['ryan', 'joe', 'john'];

for (const name of names) {
    console.log(name)
}