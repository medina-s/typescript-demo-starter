function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// 1-Works
addNumbers(1, 2);
// 2-Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3, "Foo") 
// Return types
function sayHello(name) {
    return name;
}
sayHello("Kenn");
// sayHello(1); - this would give an error
function login(username, password) {
    if (username == "elevenfiftyuser" && password == "Letmein1234")
        return true;
    return false;
}
console.log(login("elevenfiftyuser", "Letmein123"));
// Optional 
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
// 5
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");
function fullName(first, last, middle) {
    if (middle)
        return (first + " " + middle + last);
    // console.log(first + last)
    return (first + last);
}
console.log(fullName("John", "Smith", "Chris"));
//# sourceMappingURL=02-functions.js.map