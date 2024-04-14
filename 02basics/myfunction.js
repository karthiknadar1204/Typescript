"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("kartHik");
function signUpUser(name, email, isPaid) {
    return "User ".concat(name, " with email ").concat(email, " signed up");
}
signUpUser("karthik", "karthiknadar1204@gmail.com", false);
//default values for function parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("k", "k@k.com");
//making sure the function returns the correct type of data
function addThree(num) {
    return num + 3;
}
addThree(5);
var getHello = function (s) {
    return "";
};
//void
//void represents the return value of functions which don’t return a value. It’s the inferred type any time a 
// function doesn’t have any return statements, or doesn’t return any explicit value from those return statements:
// The inferred return type is void
function noop() {
    return;
}
//never
//   Some functions never return a value:
function fail(msg) {
    throw new Error(msg);
}
