console.log("");

let index4 = 10;
let jump4 = 2;

for (;;) {
    console.log(index4);
    index4 -= jump4;
    if (index4 < jump4 + jump4) break;
}
