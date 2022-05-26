// check output via F12
// What are the JavaScript data types?
Number
String
Boolean
Object
Symbol
Undefined
Null

/*------------------------------*/
let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn); // true
let result = isBatteryOn && isSwitchOn;
console.log(result); // true 

/*------------------------------*/
let isBatteryOn = true;
let isPowerOn = false;
console.log(!(isBatteryOn && isPowerOn)); // true

/*------------------------------*/
let condition1 = true;
let condition2 = false;
let logicalExpression = condition1 || condition2;
console.log(logicalExpression); // true
console.log(!logicalExpression || logicalExpression); // true

/*------------------------------*/
let cloudStorage = 4;
let systemStorage = 8;
let fileSize = 5;
let result = (cloudStorage > fileSize) || (systemStorage > fileSize);
console.log(`Saved? : ${result}`); // Saved? : true