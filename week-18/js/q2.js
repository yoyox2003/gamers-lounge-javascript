let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a2, b2, c2, [d2, e2, [f2, g2]]] = mySkills;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
