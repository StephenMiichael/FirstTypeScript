"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number(int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3];
var total2;
total2 = [1, 2, 3];
// tuple
var title;
title = [1, "foo", "stephen"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (Qualquer coisa) Não é legal.
var coisa; // or let coisa
coisa = [1, 2];
//void (Vazio)
function logger() {
    console.log("foo");
}
// never
function error() {
    throw new Error("error");
}
// object 
var cart;
cart = {
    key: "bar"
};
// Type Inference 
var message2 = "Mensagem definida";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
