console.log("---------------------------------------------------------");
let chars6 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let numbers6 = chars6.filter((item) => typeof item === "number");
let string6 = chars6.filter((item) => typeof item === "string");

let ans = [];

for (let i = 0; i < numbers6.length; i++) {
  ans.push(string6[i]);
}

ans = [...ans, ...string6];

console.log(ans);
