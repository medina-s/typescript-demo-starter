var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Properties
var Person = /** @class */ (function () {
    function Person() {
    }
    // adding a method to the class
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullname = function () {
        console.log("Hello", this.firstName, this.lastName);
        // }
    };
    return Person;
}());
// By saying New we instantioting the Person class
var sherif = new Person();
sherif.firstName = "Sherif";
sherif.lastName = "Holler";
sherif.sayHelloToFullname();
// Instantiating(creating a new instance of) Kenn to the person class
// let kenn: Person = new Person();
// kenn.firstName = "Kenn";
// kenn.sayHello();
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //set the value of gameName equal to the value that is passed into the constructor's argument
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro'); //created an instance of the Game class called battleship and pass in the values otherwise we will be having an error
console.log(battleship.gameMaker);
// INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// Example ONE
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
// Example TWO
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
console.log(myMotorcycle.easyToDoWheelie);
// Parameter properties
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    } //public it is required for this approach and we don't need bindings like "this.name"
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
// ACCESSORS
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map