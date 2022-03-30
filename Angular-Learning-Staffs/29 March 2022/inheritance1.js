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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("hello world!!");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Sachin";
        _this.lastName = "Tendulkar";
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello Pune");
    };
    Programmer.prototype.greet1 = function () {
        return this.firstName + " " + this.lastName;
    };
    Programmer.prototype.greetOne = function () {
        this.greet();
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aPerson = new Programmer();
//console.log(aPerson.greetOne());
aPerson.greetOne();
//console.log(aPerson.greet1());
