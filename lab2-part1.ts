class CheckingsAccount {
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

let myAccount= new CheckingsAccount(120, "Patrick");

myAccount.deposit(180);
myAccount.withdraw(50);
myAccount.checkBalance();
