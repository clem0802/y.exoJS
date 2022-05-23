/*---------------(SORT)---------------*/
const names = ["Marco", "Genja", "Pierre", "Ana", "Isaac", "Zecker", "Bob"];
names.sort();
// (7) ['Ana', 'Bob', 'Genja', 'Isaac', 'Marco', 'Pierre', 'Zecker']
// sorted alphabetically

/*---------------(SORT)---------------*/
const nombres = [562, 777, 0, 2008, 921, 6000, 400];
nombres.sort();
// (7) [0, 2008, 400, 562, 6000, 777, 921]

/*---------------(SORT)---------------*/
var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 }
  ];
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log(items);
// 0: {name: 'The', value: -12}
// 1: {name: 'Magnetic', value: 13}
// 2: {name: 'Edward', value: 21}
// 3: {name: 'Sharpe', value: 37}
// 4: {name: 'Zeros', value: 37}
// 5: {name: 'And', value: 45}
// length: 6
