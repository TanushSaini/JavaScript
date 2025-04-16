// Dates
let myDate = new Date()
console.log(myDate.toString()); //Wed Apr 16 2025 08:50:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Apr 16 2025
console.log(myDate.toLocaleString()); //4/16/2025, 8:52:18 AM

let myCreatedDate = new Date(2025,0,16)
console.log(myCreatedDate.toDateString());

//Timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());
