//simple comparisons
// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// === strict check = It checks both the content and data type. (equal value and equal type) 
//console.log("2" === 2)


// == equality check = It compares only the content (equal tp)
//console.log("2" == 2)

//object.is() static method determines whether two values are the same value.
console.log(Object.is("1",1));
console.log(Object.is(NaN,NaN));
console.log(Object.is(-0,0));

const obj = {}
console.log(Object.is(obj,{})); //false coz both value does not reference the same object in the memory
//Object.is() is not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.

