// Subtype polymorphism: abstract class

abstract class Account {
  constructor(protected readonly balance: number) {}

  abstract describe(): string;
}

class SavingsAccount extends Account {
  describe(): string {
    return `Savings -> Balance: ${this.balance}`;
  }
}

class CreditAccount extends Account {
  describe(): string {
    return `Credit -> Balance: ${this.balance}`;
  }
}

const a1 = new SavingsAccount(5000);
console.log(a1.describe());

const a2 = new CreditAccount(-750);
console.log(a2.describe());
