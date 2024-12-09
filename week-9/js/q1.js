function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        let nameArr = zName.split(" ");
        return nameArr[0] + " " + nameArr[1][0].toUpperCase() + ".";
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        // Write Your Code Here
        return parseInt(zAge);
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        zCountry = zCountry[0] + zCountry[1];
        zCountry = zCountry.toUpperCase();
        return zCountry;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        // Write Your Code Here
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
            zAge
        )}, You Live in ${countryTwoLetters(zCountry)}`;
    }

    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
