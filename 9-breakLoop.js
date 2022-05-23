/*---------------(loop - BREAK)---------------*/
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {break}
}
// 0
// 1
// 2
// 3
// 4
// 5


/*---------------(BREAK)---------------*/
// BREAK statements cause the code to exit a loop immediately
for (let i=0; i<100; i++){
    if (i === 10) {break}
    console.log("the current number is: "+i)
}
// the current number is: 0
// the current number is: 1
// the current number is: 2
// the current number is: 3
// the current number is: 4
// the current number is: 5
// the current number is: 6
// the current number is: 7
// the current number is: 8
// the current number is: 9

