"use strict";
var tlou = {
    title: "God Of War",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS4", "PS5"],
    getSimilars: function (title) {
        console.log("The best game in the world is " + title + ".");
    }
};
console.log("Genre: " + tlou.genre + '\n');
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var Odin = {
    title: "God Of War - Odin",
    description: "Game to kill odin",
    genre: "Action",
    platform: ["PS4", "PS5"],
    originalGame: tlou,
    newContent: ["3 Hours of story", "Odin boss"]
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
