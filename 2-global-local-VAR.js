// What are the differences between global and local variables? 
// And how can having too many global variables negatively affect your code?

-GLOBAL SCOPE:
// -Global variables have no scope and are accessible globally. 
// -They’re fully available and accessible throughout your code.
// -However, global variables can also be more difficult to debug 
// as coupling occurs between the many global variables, 
// making bugs more likely, as well as more difficult to find and debug. 
// -There can also be conflicts between variable names in the local and global scope.
// -Variables which are declared without the "let" or "const" keywords are "GLOBAL SCOPE"
/*--------------------------------------------*/
-LOCAL SCOPE:
// -variables declared within a function
// -the function parameters
// -they are only visible INSIDE that function
// -these var will be "undefined" outside that function


const outerWear = "T-Shirt";
function myOutfit() {
  let outerWear = "sweater"
  return outerWear;
}
myOutfit(); 
// sweater => it has overridden the global value: "T-shirt"