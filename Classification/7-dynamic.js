'use strict';

// Subtype polymorphism: dynamic dispatch

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  describe() {
    return `Balance: ${this.balance}`;
  }
}

class SavingsAccount extends Account {
  describe() {
    return `Savings -> ${super.describe()}`;
  }
}

class CreditAccount extends Account {
  describe() {
    return `Credit -> ${super.describe()}`;
  }
}

const accounts = [
  new SavingsAccount(5000),
  new CreditAccount(-750),
  { describe: () => 'Account stub' },
];

for (const account of accounts) {
  console.log(account.describe());
}
