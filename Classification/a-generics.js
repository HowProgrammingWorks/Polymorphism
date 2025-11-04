'use strict';

// Parametric polymorphism with Generics

const applyTransaction = (account, amount, kind) => {
  if (amount < 0) throw new Error('Amount must be non-negative');
  if (kind === 'withdraw' && account.balance < amount) {
    throw new Error('Insufficient funds');
  }
  const balance =
    kind === 'deposit' ? account.balance + amount : account.balance - amount;
  return { ...account, balance };
};

class Ledger {
  constructor() {
    // Array of
    // { accountId: string, kind: 'deposit'|'withdraw', amount: number }
    this.entries = [];
  }

  record(account, kind, amount) {
    const updated = applyTransaction(account, amount, kind);
    this.entries.push({ accountId: account.id, kind, amount });
    return updated;
  }
}

// Usage

const savings = { id: 'S-1', balance: 1000, kind: 'savings', rate: 0.02 };
const credit = { id: 'C-1', balance: 0, kind: 'credit', limit: 2000 };

const ledgerSavings = new Ledger();
const ledgerCredit = new Ledger();

const s1 = ledgerSavings.record(savings, 'deposit', 200);
const s2 = ledgerSavings.record(s1, 'withdraw', 50);

const c1 = ledgerCredit.record(credit, 'deposit', 500);
const c2 = ledgerCredit.record(c1, 'withdraw', 150);

console.dir({ s2, c2 });
console.log('Savings entries:', ledgerSavings.entries);
console.log('Credit entries:', ledgerCredit.entries);
