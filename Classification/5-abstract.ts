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

const accounts: Account[] = [new SavingsAccount(5000), new CreditAccount(-750)];

for (const account of accounts) {
  console.log(account.describe());
}
