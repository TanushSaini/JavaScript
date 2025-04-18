//Functions in JS
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    return number1+number2
}
const result = addTwoNumbers(10,5)
//console.log(result);

function loginUserMessag(username){
    if(username === undefined){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessag());


function calculateCartPrice(...num1) { //here ... means rest operator which can store number of arguments in an array.
    return num1
}
//console.log(calculateCartPrice(100,200,300,400));


user = {
    userName: "Tanush Saini",
    price: "999"
}
function handleObject(anyObject){
    console.log(`The username is ${anyObject.userName} and cart price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({
    userName:"Swayam",
    price: "399",
    item: "chiaSeeds"
})


const myNewArray = [100,200,300,400,500]
function returnSecondValue(anyArray){
    return anyArray[1]
}
//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([1,2,3,4,5,6,7,8,9]));
