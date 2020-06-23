"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAcount = /** @class */ (function () {
    function UserAcount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAcount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAcount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("------GET------");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.charDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " and has the char " + this.nickname + " at level " + this.level + ".");
    };
    return CharAccount;
}(UserAcount));
// const stephen = new UserAcount("Stephen", 21)
// console.log(stephen);
// stephen.logDetails();
var stephen2 = new CharAccount("Stephen", 21, "Klebão", 666);
stephen2.setLevel = 901;
console.log(stephen2);
stephen2.logDetails();
stephen2.charDetails();
console.log(stephen2.getLevel);
