/*---------------(ES6)---------------*/ => ECMA Script 6
// ARROW FUNCTIONS were introduced in ES6
// they are a shorhand version of writing traditional functions
// saving space 
// code more readable 
// quicker to write
// code more efficient
// inherit the parent version of "THIS"

/*----------(BEFORE)----------*/
function height(length) {
    return "HEIGHT: " + length;
}

/*----------(AFTER)----------*/
const hauteur = (length) => {
    return "HEIGHT: " + length
}
console.log(hauteur(20)); // HEIGHT: 20


/*--------------------------------------------*/
/*--------------------------------------------*/ "MULTIPLE WAYS" to write JavaScript
/*-----------*/ (1)
function getPrice(total=500, discount=100){
    return total - discount;
}
console.log(getPrice()); // 400

/*-----------*/ (2)
const getPrice = (discount) => 500 - (500 * discount);
console.log(getPrice(0.2)); // 400

/*-----------*/ (3)
const getPrice = (total) => {
    const discount = 0.2;
    return total - (total * discount);
}
console.log(getPrice(500)); // 400

/*-----------*/ (4)
// in arrow function, no need () if only 1 PARAMETER
const getPrice = total => {
    const discount = 0.2;
    return total - (total * discount);
}
console.log(getPrice(500)); // 400

/*-----------*/ (5)
const getPrice = (total=500) => {
    const discount = 0.2;
    return total - (total * discount);
}
console.log(getPrice()); // 400

/*-----------*/ (6)
const getPrice = (total=500, discount=20) => total - (discount/100 * total);
console.log(getPrice()); // 400