//Singleton Object (Object declaring using constructor)
//const tinderUser = new Object()

const tinderUser = {} //Non Singleton object(Object literal)
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Tanush",
            lastName: "Saini"
        }
    },
    mobile: 9981797559
}
//console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1: "a", 2:"b", 3: "c"}
const obj2 = {4: "d", 5:"e", 6: "f"}
//const obj3 = {obj1, obj2} //Not a desired thing coz it saves obj1 and obj2 individually in the obj3 but we need to assign the values of these two in obj3
//const obj3 = Object.assign({}, obj1, obj2)//Here the first value i.e., {} is source in which the combined object is stored and rest are the target to be combined.
const obj3 = {...obj1, ...obj2} //By using spread parameter.
//console.log(obj3);


//Object helper methods:  Object.keys(), Object.values(), Object.entries(), etc.
//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //Return type is array means returns an array of all the keys
//console.log(Object.values(tinderUser)); //Return type is array means returns an array of all the values of tinderUser
console.log(Object.entries(tinderUser)); //Return all the entry in array format. First value is key and next to it is value.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Gives boolean value if the object has the particular property or not.




