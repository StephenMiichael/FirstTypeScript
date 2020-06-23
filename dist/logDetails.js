"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("A user with " + uid + " has a name as " + user + ".");
}
function renderPlataform(platform) {
    return platform;
}
renderPlataform("ios");
logDetails(123, "Sapato");
logDetails("123", "sapato");
logInfo(123, "William");
logInfo("123", "William");
