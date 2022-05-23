// How would you write an object for a database containing the following person’s details:
// Jamie, age 24, with green eyes and ID number 5000

const person = {
    firstName: "Jamie",
    age: 24,
    eyeColor: "green",
    id: 5000
}


/*------------------(BRACKET NOTATION)------------------*/
// use square bracket notation to assign "entreValue" & "drinkValue"
const lunchObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = lunchObj["an entree"];  
const drinkValue = lunchObj["the drink"]; 


/*------------------(tricky(1) !!)------------------*/
// (FCC) => Accessing Object Properties with Variables
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
  
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed); // Doberman

/*------------------(tricky(2) !!)------------------*/
// (FCC) => Accessing Object Properties with Variables
const someObj = {
    propName: "John"
};
function propPrefix(str) {
    const s = "prop";
    return s + str;
}
  
const someProp = propPrefix("Name");
console.log(someObj[someProp]); // John

/*------------------(delete Obj property)------------------*/
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
  
delete ourDog.bark;