let myBday = new Date("6-2-2003");
let dateNow1 = new Date();
let dateDiff1 = dateNow1 - myBday;

console.log(dateDiff1 / 1000); // Seconds
console.log(dateDiff1 / 60 / 1000); // minutes
console.log(dateDiff1 / 60 / 60 / 1000); // hours
console.log(dateDiff1 / 24 / 60 / 60 / 1000); // days
console.log(dateDiff1 / 30 / 24 / 60 / 60 / 1000); // months
console.log(dateDiff1 / 12 / 30 / 24 / 60 / 60 / 1000); // years
