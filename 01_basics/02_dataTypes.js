/* 
primitive / value types = 7(string, number, boolean, null, undefined, symbol, BigInt)
Non-primitive / reference types = (arrays, objects, functions)

int => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value(when value is empty)
undefined => when value is not defined/assigned
symbol => unique

Non-primitive / reference types
object
arrays
function
*/

console.log(typeof null) //object
console.log(typeof undefined) //undefined

//NaN => Not a Number => comes when we try to convert a string that cannot be converted into a number, also when the output is not a number


//array
const heroes = ["RDJ", "Thor", "Hulk"]

//object
let myObj = {
    name:"Tanush",
    age: 21,
    Mobile: 9981797559
}





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory management in js
//Stack(Primitive)         &           Heap(Non-Primitive)