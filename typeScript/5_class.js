var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "name: " + name + ", version: " + this.version;
    };
    return TypeScript;
}());
// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//     constructor(tModel: string){
//         this.model = tModel;
//     }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.Go = function () {
        console.log("Go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    Cat.prototype.sayVoice = function () {
        console.log(this.voice);
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.color = "white";
cat.setVoice("May May");
console.log(cat.color);
cat.sayVoice();
