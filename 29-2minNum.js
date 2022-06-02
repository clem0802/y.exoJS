/*---------------------------------------------*/ 
// Find the 2 smallest numbers
// find two smallest numbers in a number array
// ASC & DESC orders
const array = [1, 10, 2, 7, 5,3, 4];
const ascending = array.slice().sort((a, b) => a - b).slice(0, 2);
const descending = array.slice().sort((a, b) => b - a).slice(-2);

console.log(array.join()); // to show it isn't changed
console.log(ascending.join());
console.log(descending.join());


/*---------------------------------------------*/ 
// Sum the 2 smallest numbers
function sumTwoSmallestNumbers(numbers) {  
    //Code here
}