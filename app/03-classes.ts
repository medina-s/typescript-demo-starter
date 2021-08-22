// Properties
class Person {
    firstName: string;
    lastName: string;

    // adding a method to the class
    sayHello(){
        console.log("Hello", this.firstName);
    }

    sayHelloToFullname(){
        console.log("Hello", this.firstName, this.lastName)
    // }
}

// By saying New we instantioting the Person class
let sherif: Person = new Person();
sherif.firstName = "Sherif";
sherif.lastName = "Holler";
sherif.sayHelloToFullname();

// Instantiating(creating a new instance of) Kenn to the person class
// let kenn: Person = new Person();
// kenn.firstName = "Kenn";
// kenn.sayHello();

class Game {
    constructor(name:string, maker:string){  //create a constructor for the class that takes in parameter typo of string
        this.gameName = name; //set the value of gameName equal to the value that is passed into the constructor's argument
        this.gameMaker = maker;
    }
    gameName: string; //ser up a property called gameName
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro')  //created an instance of the Game class called battleship and pass in the values otherwise we will be having an error
console.log(battleship.gameMaker);

// INHERITANCE

class Vehicle {  //parent class
    type: string;
    make: string;
    model:string;
    manufactureYear: number;
    runs: boolean;
    topSpeed:number;
}

// Example ONE
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar:Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

// Example TWO
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}
let myMotorcycle:Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
console.log(myMotorcycle.easyToDoWheelie)

// Parameter properties

class Store {
    constructor(name:string, city:string){
        this.name = name;
        this.city = city;
    }
    name:string;
    city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers')

class Store {
    constructor(public name: string, public city: string){} //public it is required for this approach and we don't need bindings like "this.name"
}
let ikea: Store = new Store('Ikea', 'Fishers');

// ACCESSORS
class Employee extends Person{
    private _salary:number; //underscore is the common convention
    getSalary():string{   //method that return a string
        return this._salary.toString();
    }
    setSalary(newSalary:number){  //method that takes in a number
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);