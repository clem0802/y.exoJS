/*---------------(.SLICE())---------------*/ it RETURNS THE ELEMENTS from the array
// .slice() doesn't modify the original array
// minus the instructed elements to be sliced off 
// based on the numbers instructed in the brackets
// if one parameter, it will be used as the start parameter
// if two parameters, the 2nd will be used as the end parameter
const names = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
newNames = names.slice(2,4)
// ['Pierre', 'Ana'] => 2-3  SLICED OFF
// [4] ["Isaac"] is the end parameter
console.log(names); // (7) ['Marco', 'Genja', 'Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob']
console.log(newNames); // (2) ['Pierre', 'Ana']


/*----------------------------------------*/
/*---------------(.SLICE())---------------*/ it RETURNS THE ELEMENTS from the array
// ['Pierre', 'Ana', 'Isaac', 'Zecker'] => 2-5  SLICED OFF
// [6] ["Bob"] is the end parameter, 不算在內
// 不影響原 names 
const names = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
const newNames = names.slice(2,6)
console.log(newNames); // (4) [2-3-4-5] ['Pierre', 'Ana', 'Isaac', 'Zecker']
console.log(names); // (7) ['Marco', 'Genja', 'Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob']


/*---------------(.SPLICE())---------------*/ => IT RETURNS THE DELETED ELEMENTS as arrays
// ['Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob'] => 2-6 SPLICED OFF
// [6] ["Bob"] is the end parameter, 算在內
// 會影響原 prénoms
const prénoms = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
const removed = prénoms.splice(2,6);
console.log(removed); // (5) [2-3-4-5-6] ['Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob']
console.log(prénoms); // (2) ['Marco', 'Genja']

