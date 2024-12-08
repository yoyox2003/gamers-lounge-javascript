console.log("");

function ageInTime(age) {
    if (age > 100 || age < 10) {
        console.log("Age Out Of Range");
        return;
    }
    console.log(`${age * 12} Months`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
