let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting ="Hello";

let age: number = 40;
let currentYear: number = 2018;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let companyName: string;
companyName = "eleven Fifty";

let appName: string = "Twitter";
appName = "Instagram";

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

// Array
let studentList: string[] = ['Tom', 'Tracey', 'Nick'];
let allScores: Array <number> = [100,65,25,23];

console.log("Student List:", studentList[0]);

// ANY

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// VOID

function sayHelloToAll(): void{
    console.log("Hello to all!")
}

// NULL AND UNDEFINED
let undefinedVariable: undefined = undefined;
let nullVariable:null=null;

// Tuple
// Declare tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, "kennisreally40"]; 

// Enum
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace=1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType);

// Union types

let x:number | string;
let y: number |null;

x="1234";
x=1234;


