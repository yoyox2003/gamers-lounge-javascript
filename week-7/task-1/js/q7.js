console.log("");

let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];

for (let i = 1; i < mix7.length; i++) {
    if (typeof mix7[i] == typeof "") continue;
    console.log(mix7[i]);
}
