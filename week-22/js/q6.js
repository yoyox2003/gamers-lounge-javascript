// Write Your Generator Function Here
function* gen6() {
  let current = 14;
  let increment = 140;

  while (true) {
    yield current;
    current += increment;
    increment += 200;
  }
}

let generator6 = gen6();

console.log(generator6.next()); // {value: 14, done: false}
console.log(generator6.next()); // {value: 154, done: false}
console.log(generator6.next()); // {value: 494, done: false}
console.log(generator6.next()); // {value: 1034, done: false}
console.log(generator6.next()); // {value: 1774, done: false}
console.log(generator6.next()); // {value: 2714, done: false}
console.log(generator6.next()); // {value: 3854, done: false}
console.log(generator6.next()); // {value: 5194, done: false}
console.log(generator6.next()); // {value: 6734, done: false}
