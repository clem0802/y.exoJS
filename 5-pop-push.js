/*---------------(POP-PUSH)---------------*/
let mimo = ["Hi", "The", "best", "coding", "courses", "ever", "is", "really"];
mimo.pop(); 
mimo.push("Mimo.", "It's", "worth", "a", "try.", "Buy", "it.");
mimo.shift();
mimo.unshift("Hi");
mimo.join(" "); // "Hi,The,best,coding,courses,ever,is,Mimo.,It's,worth,a,try.,Buy,it."

console.log(mimo.join());
// Hi,The,best,coding,courses,ever,is,Mimo.,It's,worth,a,try.,Buy,it.
console.log(mimo.join(" "));
// Hi The best coding courses ever is Mimo. It's worth a try. Buy it.
console.log(mimo.join("-"));
// Hi-The-best-coding-courses-ever-is-Mimo.-It's-worth-a-try.-Buy-it.






