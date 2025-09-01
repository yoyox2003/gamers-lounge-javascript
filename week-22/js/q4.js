// First way
let myBday4 = new Date("6-2-2003");

console.log(myBday4);
// Second way
myBday4 = new Date();

myBday4.setFullYear(2003);
myBday4.setMonth(5);
myBday4.setDate(2);

console.log(myBday4);

// Third way
myBday4 = new Date(2003, 5, 2);
console.log(myBday4);
