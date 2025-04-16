//Arrays in JS
//Array is an object in js. Also Arrays in js are resizable. Mix datatypes can be in a same array
const myArray = [1, 2, 3, 4, 5]
const myArrayMix = [1, 2, 3, 4, 5, true, "Tanush"]

const myArr2 = new Array(1,2,3)
//console.log(myArr2[2]);

//Array Methods
// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

//const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);


//Slice Splice
console.log("A "+myArray);

const myn1 = myArray.slice(1,3) //Slice doesnt manipulate the original array
console.log(myn1);

console.log("B "+myArray);

const myn2 = myArray.splice(1,3) //Splice manipulates the original array
console.log(myn2);

console.log("C "+myArray);


