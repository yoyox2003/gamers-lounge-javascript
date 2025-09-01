let mySet1 = new Set([10]);
mySet1.add(20);
mySet1.add(mySet1.size);
console.log(mySet1);
console.log(Array.from(mySet1)[2]);
