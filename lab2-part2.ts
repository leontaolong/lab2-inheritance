class SavingsAccount {
    private numOfWithdrawal: number;
    constructor(private initialBalance:number, private ownerName:string) {
        this.numOfWithdrawal = 0; 
    }

    deposit(amount:number) {
            this.initialBalance+= amount;
    }

    withdraw(amount:number) {
        if (this.numOfWithdrawal = 3)
            console.log("Sorry, you have already reach the maximun number of withdrawals.");
        else {
            this.initialBalance-= amount;
            this.numOfWithdrawal++;
        }
    }

    checkBalance() {
        console.log(`${this.ownerName}: ${this.initialBalance}`);
    }
}

let mySavingsAccount= new SavingsAccount(800, "Patrick");

mySavingsAccount.checkBalance();
mySavingsAccount.withdraw(50);
mySavingsAccount.withdraw(50);
mySavingsAccount.withdraw(50);
mySavingsAccount.checkBalance();
mySavingsAccount.withdraw(50);