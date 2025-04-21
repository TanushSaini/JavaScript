//Array specific loops : These loops generally focuses on iterating an array or an object

//for of loop
// for (const element of object) {
    
// }

// const arr = [1,2,3,4,5,6,7]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello! Tanush"
for (const greet of greetings) {
    //console.log(`Each character is ${greet}`);
    
}

//Maps: Stores only unique value, have a key value pair and are ordered.
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ":-", value);
    
}

//lets see this for of loop on Object
const obj = {
    game1: "Valo",
    game2: "Spiderman"
}
// for (const key of obj) {
//     console.log(key);//Gives error that obj is not iterable
    
// }//Thus we use for in loop


//For in Loop
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    //console.log(key); 
}
for (const key in myObject) {
    //console.log(myObject[key]);
    
}

for (const key in myObject) {
    //console.log(`${key} is shorthand for ${myObject[key]}`);
    
}

//for in loop for array
const programming = ["JavaScript","rb","py","Java","cpp","swift"]
for (const key in programming) {
    //console.log(key); //It gives key of array
    //console.log(programming[key]);//This line will give you the value of array indxes
}
//for in dont work on map as maps are not iterable


//for each loop for arrays in js
const coding = ["js","py","java","cpp","rb","kotlin"]

// coding.forEach( function (items){
//     console.log(items);
// } )

// coding.forEach( (val) => {console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (val, index, coding) => {
//     console.log(val,index,coding);
// } )



const myCoding = [
    {
        'language': 'JavaScript',
        'extension': '.js'
    },
    {
        'language': 'Java',
        'extension': '.java'
    },
    {
        'language': 'Python',
        'extension': '.py'
    },
]
myCoding.forEach( (item => {
    console.log(item.language);
    //console.log(item.extension);
}) )