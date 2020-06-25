"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Assistir Dark",
    description: "Prestar atenção nos detalhes",
    completed: false,
};
console.log(todo);
// todo.completed = true; 
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
//Para dar alterar um const Readonly
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechar ghost of Tsushima",
    completed: true,
};
var todo4 = {
    title: "Fechar ghost of Tsushima",
    completed: false,
};
