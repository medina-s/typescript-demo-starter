var Person = /** @class */ (function () {
    function Person() {
    }
    // adding a method to the class
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
// By saying New we instantioting the Person class
var phil = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue";
var someVariableName = new Person();
// Instantiating(creating a new instance of) Kenn to the person class
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
// Challenge
//# sourceMappingURL=03-classes.js.map