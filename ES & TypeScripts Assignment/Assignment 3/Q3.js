var items = {
    id: 50,
    title: "dinesh",
    price: 500,
    printOrder: function () {
        console.log("Order is: ");
        console.log("ID: ", this.id);
        console.log("Title", this.title);
        console.log("Price", this.price);
    },
    getPrice: function () {
        return this.price;
    }
};
var obj = Object.assign({}, items);
obj.printOrder();
console.log(obj);
console.log(obj.title);
//# sourceMappingURL=Q3.js.map