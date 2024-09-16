function Account(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
};
Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds.");
  } else {
    this.balance -= amount;
    console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
  }
};

function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;
SavingsAccount.prototype.addInterest = function () {
  const interest = this.balance * (this.interestRate / 100);
  this.balance += interest;
  console.log(`Added interest: ${interest}. New balance: ${this.balance}`);
};

function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;
CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds for this check withdrawal.");
  } else {
    this.balance -= amount;
    console.log(
      `Withdrawn using check: ${amount}. New balance: ${this.balance}`
    );
  }
};

const savings = new SavingsAccount("SA123", 1000, 5);
savings.deposit(500);
savings.addInterest();
savings.withdraw(200);

const checking = new CheckingAccount("CA456", 2000);
checking.deposit(1000);
checking.withdrawUsingCheck(500);
checking.withdraw(3000);
