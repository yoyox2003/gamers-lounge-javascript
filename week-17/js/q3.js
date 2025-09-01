console.log("");

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap3 = new Map(Object.entries(myInfo));
console.log(myMap3);
console.log(myMap3.size);
console.log(myMap3.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
