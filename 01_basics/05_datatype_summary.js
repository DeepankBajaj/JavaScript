//  Primitive- call by value- it gives copy of the original variable

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)- it gives refernce of original value and any changes occur to original value

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

/*const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

/* Primitive datatypes:
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object */

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* +++++++++++++++++++++++++++++
 Stack and Heap memory

 Stack memory(for all primitive data types)- copy of the original variable
 Heap(Non-primitive)- refernce of original
*/
let myName= "Deepank Bajaj"
let yourName = myName
yourName = "MS Dhoni"
console.log(myName);
console.log(yourName);

let employee1 ={
    eId: 1234,
    eName:"Deepank",
    eNumber:99999
}
console.log(employee1);

let employee2 = employee1
employee2.eId =9876

console.log(employee1)
console.log(employee2)
