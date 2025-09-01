let theNumber = 100020003000;

console.log([...new Set(theNumber.toString())].filter((d) => d !== "0").join(""));
