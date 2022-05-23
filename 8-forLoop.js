/*---------------(FOR LOOP)---------------*/
// Write a loop that prints every number divisible by 3 from 1-200:
for (let i=1; i<201; i++){
    if (i % 3 === 0){
        console.log(i) // 3, 6, 9, 12, 15, 18... ... 192, 195, 198
    }
}


/*---------------(FOR LOOP)---------------*/
// Create a loop that runs from 0 to 9.
let i;
for (i=0; i<10; i++) {
    console.log(i);
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

/*---------------(FOR LOOP)---------------*/
// Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange", "Strawberry"];
for (x of fruits) {
    console.log(x);
}
// "Apple"
// "Banana"
// "Orange"
// "Strawberry"

/*------------------------------*/ (MORE and MORE)
function line(length){
    var bille = "°";
    for(var i=1; i<length; i++){
        bille += " *";
    }
    return bille + "\n"
}
function build(num){
    var form = "";
    for(var j=1; j<num; j++){
        form += line(j);
    }
    return form
}
console.log(build(7))
// °
// ° *
// ° * *
// ° * * *
// ° * * * *
// ° * * * * *

/*------------------------------*/ (LESS and LESS)
function line(length){
    var bille = "°"
    for(var i=1; i<length; i++){
        bille += " *"
    }
    return bille + "\n"
}
let build = 7;
while(build >=1){
    console.log(line(build));
    build--;
}
// ° * * * * * *
// ° * * * * * 
// ° * * * * 
// ° * * * 
// ° * * 
// ° * 
// ° 