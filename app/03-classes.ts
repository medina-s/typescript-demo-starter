
class Person {
    firstName: string;
    lastName: string;

    // adding a method to the class
    sayHello(){
        console.log("Hello", this.firstName);
    }

    // sayHelloToFullname(){
    //     console
    // }
}

// By saying New we instantioting the Person class
let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";

let someVariableName: Person = new Person();

// Instantiating(creating a new instance of) Kenn to the person class
let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

// Challenge
