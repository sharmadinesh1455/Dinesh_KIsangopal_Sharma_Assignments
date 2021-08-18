var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, accountName, AccountBal) {
        this.id = id;
        this.accountName = accountName;
        this.AccountBal = AccountBal;
    }
    Account.prototype.getBalance = function () {
        return this.AccountBal;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, accountName, AccountBal, amount) {
        var _this = _super.call(this, id, accountName, AccountBal) || this;
        _this.interest = amount;
        Account.AccountTotal = _this.AccountBal * (_this.interest / 100);
        return _this;
    }
    SavingsAccount.prototype.total = function () {
        return this.getBalance() + Account.AccountTotal;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, accountName, AccountBal, amount) {
        var _this = _super.call(this, id, accountName, AccountBal) || this;
        _this.credit = amount;
        return _this;
    }
    CurrentAccount.prototype.total = function () {
        return this.getBalance() + this.credit;
    };
    return CurrentAccount;
}(Account));
var sav1 = new SavingsAccount(1, "Dinesh", 5000, 2);
console.log("AccountID: " + sav1.id + " <br> AccountName: " + sav1.accountName + " <br> AccountTotalBalance: " + sav1.total());
var cur1 = new CurrentAccount(2, "Dinesh", 5000, 2000);
console.log("AccountID: " + cur1.id + " <br> AccountName: " + cur1.accountName + " <br> AccountTotalBalance: " + cur1.total());
//# sourceMappingURL=Q8.js.map