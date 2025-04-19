// if
//if(condition){definition}
// if (condition) {
    
// } else {
    
// }



//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//Falsy Values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', " ", [], {}, function(){}


//Nullish Coalescing operator(??) : null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
val1 = undefined ?? 10
console.log(val1);

//Terniary operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("More than 80")

