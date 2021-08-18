var circle = {
    print: function () {
        console.log("Printing the circle: ");
    }
};
var Employee = {
    print: function () {
        console.log("Printing Employee: ");
    }
};
function PrintAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        i.print();
    }
}
PrintAll(circle, Employee);
//# sourceMappingURL=Q3_Asignenment.js.map