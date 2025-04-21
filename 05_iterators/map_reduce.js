//Map
//const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.map( (num) => num+10 )
//chaining: Means that we can add a method after another i.e., map after a map and after a filter
// const newNums = myNums
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40 )
// console.log(newNums);



//Reduce
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and current value: ${currVal}`);    
//     return acc + currVal
// },4)
const myTotal = myNums.reduce( (acc,currval) => {
    //console.log(`Accumulator: ${acc} and CurrentValue: ${currval}`);
    return acc + currval
},0 )
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },{
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0 )
console.log(priceToPay);
