const name = "Tanush"
const repoCount = 5

//console.log(name + repoCount + "Value")

//String interpolation - More readable code and easy to write (uses backtick on esc button) 
console.log(`Hello my name is ${name} and my Repo Count is ${repoCount}`);

//Another way of declaring String(print this line in console and see the magic by clicking the dropdown)
const gameName = new String('Valo123')

//console.log(gameName[3]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());


//+++++++++++++++++++++++++++++++++++++++++++++++   Numbers     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const  score = 4
// console.log(score);

const balance = new Number(400)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));



//++++++++++++++++++++++++++++++++++++++++++++++++++  Maths   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-1)); //changes negative to +ve but have no effect on poitive value
// console.log(Math.round(6.6)); //use ceil and floor for desired output
// console.log(Math.sqrt(25)); //Gives the square root
// console.log(Math.min(1,3,0,9,10,0));

console.log(Math.random()); //Gives random value b/w 0 to 1
console.log((Math.random()*10)+1); //*10 so that it gives a whole num and +1 so that the num can't be 0
console.log(Math.floor((Math.random()*10)+1));//floor to round off the num to its base num

//for values b/w desired range
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min+1))+min))




