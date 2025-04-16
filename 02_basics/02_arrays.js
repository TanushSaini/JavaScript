const marvel_heroes = ["Thor","Hulk","Venom"]
const dc_heroes = ["Superman","flash","Batman"]

//Push 
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes); //[ 'Thor', 'Hulk', 'Venom', [ 'Superman', 'flash', 'Batman' ] ]

//Concat
// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

//Spread
// const allHeroesNew = [...marvel_heroes,...dc_heroes]
// console.log(allHeroesNew)

//Flat
const nums = [1, 2, 3, [19,8], 5, [0, 1, [6,7]], 7]
const flatNums = nums.flat(Infinity)
console.log(flatNums);

//How to convert to array
//from
console.log(Array.isArray("Tanush"));
console.log(Array.from("Tanush"));
console.log(Array.from({name: "Tanush"})); //Interesting case - Gives an empty array

//to
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));
