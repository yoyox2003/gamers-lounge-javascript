let elements = document.querySelectorAll("body *");
console.log(elements);
for (let i = 0; i < elements.length - 1; i++) {
    elements[i].onclick = function () {
        console.log(`This is ${elements[i].tagName}`);
    };
}
