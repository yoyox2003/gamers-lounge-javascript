console.log("");

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().slice(false).join(""));

// Needed Output
// 123
