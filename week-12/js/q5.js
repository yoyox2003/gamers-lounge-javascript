let imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].hasAttribute("alt")) {
        imgs[i].alt = "old";
    } else {
        imgs[i].alt = "Elzero new";
    }
}
