/*---------------(.SLICE())---------------*/ it RETURNS THE ELEMENTS from the array
// .slice() doesn't modify the original array
// minus the instructed elements to be sliced off 
// based on the numbers instructed in the brackets
// if one parameter, it will be used as the start parameter
// if two parameters, the 2nd will be used as the end parameter
const names = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
newNames = names.slice(2,6); 
// ['Pierre', 'Ana', 'Isaac', 'Zecker'] => [2-5]  SLICED OFF
// [6] ["Bob"] the end parameter, 不算在內
// 不影響原 names 
console.log(newNames); // (4) ['Pierre', 'Ana', 'Isaac', 'Zecker']
console.log(names); // (7) ['Marco', 'Genja', 'Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob']


/*----------------------------------------*/
/*---------------(.SLICE())---------------*/ it RETURNS THE ELEMENTS from the array
const names = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
const newNames = names.slice(2,5)
// ['Pierre', 'Ana', 'Isaac'] => [2-4]  SLICED OFF
// ["Zecker", "Bob"] 不算在內
// 不影響原 names 
console.log(newNames); // (3) ['Pierre', 'Ana', 'Isaac']
console.log(names); // (7) ['Marco', 'Genja', 'Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob']


/*---------------(.SPLICE())---------------*/ => IT RETURNS THE DELETED ELEMENTS as arrays
// ['Pierre', 'Ana', 'Isaac', 'Zecker', 'Bob'] => at [2] takes off 6 elem
const prénoms = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
const removed = prénoms.splice(2,4); // from [2] onward, takes off 4 elem
console.log(removed); // (4) ['Pierre', 'Ana', 'Isaac', 'Zecker']
console.log(prénoms); // (3) ['Marco', 'Genja', 'Bob']

