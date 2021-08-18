class Account 
{
    id: number;
    accountName: String;
    AccountBal: number;

    static AccountTotal: number;

    constructor(id:number, accountName:String, AccountBal: number )
    {
        this.id = id;
        this.accountName= accountName;
        this.AccountBal = AccountBal;
    }
    getBalance()
    {
        return this.AccountBal;
    }
}
class SavingsAccount extends Account
{
    interest: number;
    constructor(id:number, accountName:String, AccountBal: number, amount: number)
    {
        super(id, accountName, AccountBal);      
        this.interest= amount;
        Account.AccountTotal = this.AccountBal * (this.interest/100);
    }
    total()
    {
        return this.getBalance() + Account.AccountTotal;
    }
}

class CurrentAccount extends Account
{
    credit: number;
    constructor(id:number, accountName: String, AccountBal: number, amount:number)
    {
        super(id, accountName,AccountBal);
        this.credit= amount;
        
    }
    total()
    {
        return this.getBalance() + this.credit;
    }
}


let sav1 = new SavingsAccount(1, "Dinesh" , 5000, 2);
console.log(`AccountID: ${sav1.id} <br> AccountName: ${sav1.accountName} <br> AccountTotalBalance: ${sav1.total()}`);
let cur1 = new CurrentAccount(2, "Dinesh" , 5000, 2000);
console.log(`AccountID: ${cur1.id} <br> AccountName: ${cur1.accountName} <br> AccountTotalBalance: ${cur1.total()}`);