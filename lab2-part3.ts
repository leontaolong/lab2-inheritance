class Account {
    constructor(private initialBalance:number, private ownerName:string) {}

    deposit(amount:number) {
        this.initialBalance+= amount;
    }

    withdraw(amount:number) {
        this.initialBalance-= amount;
    }

    checkBalance() {
        console.log(`${this.ownerName}: ${this.initialBalance}`);
    }
}

class CheckingAccount extends Account {}

class SavingAccount extends Account {
    private numOfWithdrawal: number = 0;
    withdraw(amount:number) {
        if (this.numOfWithdrawal = 3)
            console.log("Sorry, you have already reach the maximun number of withdrawals.");
        else {
            super.withdraw;
            this.numOfWithdrawal++;
        }
    }
}

let myBankCheckingAccount= new CheckingAccount(120, "Patrick");
let myBankSavingAccount= new CheckingAccount(120, "Patrick");

myBankCheckingAccount.deposit(180);
myBankCheckingAccount.withdraw(50);
myBankCheckingAccount.checkBalance();

myBankSavingAccount.deposit(180);
myBankSavingAccount.withdraw(50);
myBankSavingAccount.withdraw(50);
myBankSavingAccount.withdraw(50);
myBankSavingAccount.withdraw(50);
myBankSavingAccount.checkBalance();
myBankSavingAccount.withdraw(50);
myBankSavingAccount.checkBalance();