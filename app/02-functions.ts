function addNumbers(numOne:number, numTwo: number){
    return numOne + numTwo;
}

// 1-Works
addNumbers(1, 2);

// 2-Errors
// addNumbers(1,2,3);
// addNumbers(1,2,3, "Foo") 

// Return types
function sayHello(name: string) : string {
    return name;
}
sayHello("Kenn");
// sayHello(1); - this would give an error


function login(username: string, password:string) : boolean {
    if (username == "elevenfiftyuser" && password == "Letmein1234")
    return true;
    return false;
}

console.log(login("elevenfiftyuser", "Letmein123"));

// Optional 
function addNumbersWithOptional(numOne: number, numTwo:number, someString?: string){
    console.log(someString);
    return numOne + numTwo;
}

// 5
addNumbersWithOptional(1,2);
addNumbersWithOptional(1,2, "This is optional");

function fullName(first: string, last: string, middle? :string){
    if(middle)
    return (first+ " "+ middle + last)
    // console.log(first + last)
    return (first + last)
}

console.log(fullName("John", "Smith", "Chris"));

