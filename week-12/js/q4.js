let Element_1 = document.getElementsByClassName("one")[0];
let Element_2 = document.getElementsByClassName("two")[0];

// code to switch classes
let temp = Element_1.className;
Element_1.className = Element_2.className;
Element_2.className = temp;

Element_1.remove();

let txt = document.createTextNode(" 2");
Element_1.appendChild(txt);

document.body.appendChild(Element_1);

console.log(temp);
