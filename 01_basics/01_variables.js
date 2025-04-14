const accountId = 122345 //const value cannot be changed later on
let accountEmail = "tanush@google.com" //used for block level scope 
var accountPassword = "3542543"  //var has a global scope thus avoid using it
accountCity = "Jaipur" //we can also create a variable without using var let or const in js

//accountId = 2 //Not Allowed
accountEmail = "abc@gmail.com"
accountPassword = "121212"
accountCity = "Bengaluru"

/* prefer not to use var because of issue in block scope and functional scope */

//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
