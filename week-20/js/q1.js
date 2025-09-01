let set1 = new Set([10]);

set1.add(20).add(set1.size);

console.log(set1);

let ite = set1.keys();
ite.next();
ite.next();

console.log(ite.next().value);
