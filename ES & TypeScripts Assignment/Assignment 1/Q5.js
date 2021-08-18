var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Task 1st of Question5.....
var add = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    console.log(a + b);
};
add();
add(50, 20);
//Task 2nd of Question 5
var userFriends = function (username) {
    var arrayFriends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrayFriends[_i - 1] = arguments[_i];
    }
    console.log("Username: " + username);
    for (var i in arrayFriends) {
        console.log(arrayFriends[i]);
    }
};
var username = "Dinesh";
var array = ["nikita", "Novita", "Ayushi"];
userFriends(username, array);
//Third Task OF Question 5
var printCapitalNames = function (message) {
    var cities = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        cities[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log("List in uppercase");
    for (var i in cities) {
        console.log(cities[i].toUpperCase());
    }
};
var message = "List of Cities";
var cityArray = ["Kolhapur", "Pune", "Sangali", "Amritsar"];
printCapitalNames.apply(void 0, __spreadArray([message], cityArray));
//# sourceMappingURL=Q5.js.map