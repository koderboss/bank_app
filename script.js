class BankAccount {
  accountNumber = 34334;
  ownerName = 'Saidur';
  balance = 0;

  constructor(accountNumber, ownerName, balance){
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(deposit_amount = 0){
    if(deposit_amount != 0){
      return this.balance += deposit_amount;
    } else{
      console.log("You didn't deposit yet!");
    }
  }

  withdraw(withdraw_amount){
    if(this.deposit < withdraw_amount){
      console.log("Insufficient funds!");
    }
    else {
      this.balance = this.balance - withdraw_amount;
    }
  }

  getBalance(){
    console.log("Ballance: " + this.balance);
  }

  displayAccountInfo(){
    console.log( `Account Number: ${this.accountNumber} \nOwner Name: ${this.ownerName} \nBalance: ${this.balance}`);

  }
}

const saidur = new BankAccount(2324255, "Saidur", 10000);
saidur.deposit(10000);
saidur.displayAccountInfo();

const rahman = new BankAccount(34245, "Rahman", 80000);
rahman.displayAccountInfo();