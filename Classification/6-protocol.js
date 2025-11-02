'use strict';

// Subtype polymorphism: protocol/duck typing

const describe = (entity) => {
  if (typeof entity.describe !== 'function') {
    throw new TypeError('Requires describe method');
  }
  entity.describe();
};

class SavingsAccount {
  constructor(balance) {
    this.balance = balance;
  }

  describe() {
    console.log(`Savings -> Balance: ${this.balance}`);
  }
}

class CreditAccount {
  constructor(balance) {
    this.balance = balance;
  }

  describe() {
    console.log(`Credit -> Balance: ${this.balance}`);
  }
}

describe(new SavingsAccount(5000));
describe(new CreditAccount(-750));
