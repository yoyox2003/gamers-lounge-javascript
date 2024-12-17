// I won't do the css since its optional and i want to try and finish the lessons in time
let inputs = document.getElementsByTagName("input");
let numInp = inputs[0];
let textInp = inputs[1];
let select = document.querySelector('select[name="type"]');
let results = document.querySelector(".results");

let num_of_elements;
let text_of_element;
let type;

document.forms[0].onsubmit = function (e) {
    results.innerHTML = "";
    e.preventDefault();

    num_of_elements = numInp.value;
    text_of_element = textInp.value;
    type = select.value;

    let txt = document.createTextNode(text_of_element);

    for (let i = 0; i < num_of_elements; i++) {
        let box = document.createElement(type);
        box.textContent = text_of_element;
        box.className = "box";
        box.title = "Element";
        box.id = `id-${i + 1}`;
        results.appendChild(box);
    }
};
