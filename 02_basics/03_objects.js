//Singleton
//Object.create


//Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Tanush",
    "full name": "Tanush Saini",
    [mySym]: "myKey1", //This is syntax to declare a symbol as key inside an object
    age: 21,
    email: "sainitanush09@gmail.com",
    location: "Banglore",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
}

//How to access the elements of an object
// console.log(JsUser.name); //not so desired method to use
// console.log(JsUser["name"]); //Use this syntax instead
// //console.log(JsUser."full name"); //Gives error and can be accessed by only the method above it.
// console.log(JsUser[mySym]); //In symbol we cannot use " " to access

//update any value
JsUser.email = "swayam9243@gmail.com"
//Object.freeze(JsUser) //Used to freeze any updation. There will be no change in the object after freeze
//JsUser.email = "dsghjfgb@gmail.com"
//console.log(JsUser);

//Adding function in the object
JsUser.greetings = function(){
    console.log("Hello JsUser!!!");    
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JsUser!!!, ${this.name}`);    
}

//console.log(JsUser.greetings);
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());


