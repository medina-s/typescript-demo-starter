var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName = "eleven Fifty";
var appName = "Twitter";
appName = "Instagram";
var isLoggedIn = true;
var isGoldLevelUser = true;
// Array
var studentList = ['Tom', 'Tracey', 'Nick'];
var allScores = [100, 65, 25, 23];
console.log("Student List:", studentList[0]);
// ANY
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// VOID
function sayHelloToAll() {
    console.log("Hello to all!");
}
// NULL AND UNDEFINED
var undefinedVariable = undefined;
var nullVariable = null;
// Tuple
// Declare tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"];
// Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
// Union types
var x;
var y;
x = "1234";
x = 1234;
//# sourceMappingURL=01-types.js.map