var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
var myApples = new Apples(); // we create new instance of the Apples class and call the setTimeOfPurchase method
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map