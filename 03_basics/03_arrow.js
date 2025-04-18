const user = {
    userName: "Tanush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to this website`);
        
    }
}

// user.welcomeMessage()
// user.userName = "Swayam"
// user.welcomeMessage()


// const chai = function(){
//     let userName = "Tanush"
//     console.log(this.userName);
    
// }

//Arrow Function
const chai = () => {
    let userName = "Tanush"
    console.log(this);
    
}
//chai()

//Basic arrow function
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//Implicit return arrow function
// const addTwo = (num1 , num2) => num1 + num2
//const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({userName: "Tanush"})

console.log(addTwo(3,4))