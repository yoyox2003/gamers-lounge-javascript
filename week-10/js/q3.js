console.log("");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let newArr = myArray.reduce((acc, el) => {
    if (Array.isArray(el)) {
        return (
            acc +
            el.reduce((acc, ele) => {
                return acc + ele;
            })
        );
    }
    return acc + el;
});

console.log(newArr);
