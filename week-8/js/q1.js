function sayHello(name, gender) {
    if (gender == "Male") console.log(`Hello Mr ${name}`);
    else if (gender == "Female") console.log(`Hello Miss ${name}`);
    else console.log(`Hello ${name}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
