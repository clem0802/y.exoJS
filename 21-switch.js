switch (fruits) {
    case "Banana":
    alert("Hello")
    break;
    case "Apple":
    alert("Welcome")
    break;
    default: 
    alert("Neither");
}

/*------------------------------------*/
function caseInSwitch(val) {
    let answer = "";

    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }

    return answer;
}
caseInSwitch(1); // 'alpha'

/*------------------------------------*/
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  result=lookup[val]
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");


// (the SAME AS below):
// Convert the switch statement into an object called lookup. 
// Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");