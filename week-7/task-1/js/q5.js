console.log("");

let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter5 = "a";

let n = 1;
for (let i = 0; i < friends5.length; i++) {
    if (letter5 == friends5[i][0].toLowerCase()) continue;
    console.log(`${n} => ${friends5[i]}`);
    n++;
}
