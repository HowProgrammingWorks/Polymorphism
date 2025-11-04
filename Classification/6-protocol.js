'use strict';

// Subtype polymorphism: protocol/duck typing

class SavingsAccount {
  constructor(balance) {
    this.balance = balance;
  }

  describe() {
    return `Savings -> Balance: ${this.balance}`;
  }
}

class CreditAccount {
  constructor(balance) {
    this.balance = balance;
  }

  describe() {
    return `Credit -> Balance: ${this.balance}`;
  }
}

const getInfo = (entity) => {
  if (typeof entity.describe !== 'function') {
    throw new TypeError('Requires describe method');
  }
  const res = entity.describe();
  console.log(res);
};

const account = {
  describe() {
    return 'Stub account';
  },
};

getInfo(account);
getInfo(new SavingsAccount(5000));
getInfo(new CreditAccount(-750));
