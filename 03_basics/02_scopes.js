var c = 300
let a = 123
if(true){
    let a = 10 //scope is limited to this if block (block scope)
    const b = 20 //scope is limited to this if block (block scope)
    var c = 30 //have a global scope
    console.log("INNER: ",a);
    
}

console.log(a); 
//console.log(b); //Gives error because of local scope
//console.log(c); //Give c = 30 and overrite 300 beecause it has a global scope thus create problems



function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}