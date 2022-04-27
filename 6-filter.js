/*---------------(FILTER)---------------*/
const words = ["ice", "good", "work", "expression", "logically", "javascript", "passionate", "node"];
const result = words.filter(word => word.length > 6);
console.log(result);
// (4) ['expression', 'logically', 'javascript', 'passionate']