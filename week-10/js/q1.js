let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let ign = mix.map((el) => {
    if (typeof el === "string") {
        return el;
    }
});

console.log(ign.join(""));
