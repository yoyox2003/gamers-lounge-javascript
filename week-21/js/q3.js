// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = this.formatCard(card);
  }

  formatCard(card) {
    let cardString = card.toString().replace(/-/g, "");
    return cardString.replace(/(.{4})/g, "$1-").slice(0, -1);
  }

  showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
