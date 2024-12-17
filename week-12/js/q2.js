let elements = document.getElementsByTagName("img");

console.log(elements);

for (let i = 0; i < elements.length; i++) {
    elements[i].src =
        "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    elements[i].alt = "Elzero Logo";
}
