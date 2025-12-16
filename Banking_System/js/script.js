/********************************
 * BANKING SYSTEM IN DSA (JS)
 ********************************/

class BankAccount {
  constructor(accountNumber, name, balance = 0) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.balance = balance;
  }

  /* Deposit Money */
  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New Balance: ₹${this.balance}`);
  }

  /* Withdraw Money */
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn ₹${amount}. New Balance: ₹${this.balance}`);
  }

  /* Display Account Details */
  display() {
    console.log(`Account No: ${this.accountNumber}`);
    console.log(`Name: ${this.name}`);
    console.log(`Balance: ₹${this.balance}`);
  }
}

/* ===============================
   BANK MANAGEMENT SYSTEM
   =============================== */

class Bank {
  constructor() {
    this.accounts = [];
  }

  /* Create Account */
  createAccount(accountNumber, name, balance) {
    let account = new BankAccount(accountNumber, name, balance);
    this.accounts.push(account);
    console.log("Account created successfully");
  }

  /* Find Account */
  findAccount(accountNumber) {
    return this.accounts.find(acc => acc.accountNumber === accountNumber);
  }

  /* Deposit */
  deposit(accountNumber, amount) {
    let acc = this.findAccount(accountNumber);
    if (acc) acc.deposit(amount);
    else console.log("Account not found");
  }

  /* Withdraw */
  withdraw(accountNumber, amount) {
    let acc = this.findAccount(accountNumber);
    if (acc) acc.withdraw(amount);
    else console.log("Account not found");
  }

  /* Display All Accounts */
  displayAccounts() {
    if (this.accounts.length === 0) {
      console.log("No accounts available");
      return;
    }
    for (let acc of this.accounts) {
      console.log("------------------");
      acc.display();
    }
  }
}

/* ===============================
   TESTING THE BANKING SYSTEM
   =============================== */

let bank = new Bank();

bank.createAccount(101, "Amit", 5000);
bank.createAccount(102, "Neha", 3000);

bank.deposit(101, 2000);
bank.withdraw(102, 1000);

bank.displayAccounts();

console.log("\nBANKING SYSTEM EXECUTED SUCCESSFULLY ✅");
