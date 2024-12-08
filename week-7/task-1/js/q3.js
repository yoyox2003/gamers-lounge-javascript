console.log("");

let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker3; j <= breaker3 + breaker3; j += breaker3) {
        console.log("-- " + j);
    }
}
