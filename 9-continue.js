/*---------------(loop - CONTINUE)---------------*/
for (i = 0; i < 16; i++) {
    console.log(i);
    if (i % 2 === 0) {continue}
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15


/*---------------(CONTINUE)---------------*/
for (let i=0; i<20; i++) {
    if(i % 2 === 0) {continue}
    console.log("the current number is: " + i)
}
// the current number is: 1
// the current number is: 3
// the current number is: 5
// the current number is: 7
// the current number is: 9
// the current number is: 11
// the current number is: 13
// the current number is: 15
// the current number is: 17
// the current number is: 19