// Parametric polymorphism with Generics

interface Account {
  id: string;
  balance: number;
}

interface SavingsAccount extends Account {
  kind: 'savings';
  rate: number;
}

interface CreditAccount extends Account {
  kind: 'credit';
  limit: number;
}

type AnyAccount = SavingsAccount | CreditAccount;

type TransactionKind = 'deposit' | 'withdraw';

interface Transaction<T extends Account> {
  kind: TransactionKind;
  amount: number;
}

function applyTransaction<T extends Account>(account: T, tx: Transaction<T>): T {
  if (tx.amount < 0) throw new Error('Amount must be non-negative');
  if (tx.kind === 'withdraw' && account.balance < tx.amount) {
    throw new Error('Insufficient funds');
  }
  const balance = tx.kind === 'deposit'
    ? account.balance + tx.amount
    : account.balance - tx.amount;
  return { ...account, balance };
}

class Ledger<T extends Account> {
  private entries: Array<{ accountId: string; kind: TransactionKind; amount: number }>;

  constructor() {
    this.entries = [];
  }

  record(account: T, tx: Transaction<T>): T {
    const updated = applyTransaction(account, tx);
    const { kind, amount } = tx;
    const record = { accountId: account.id, kind, amount };
    this.entries.push(record);
    return updated;
  }

  getAll() {
    return this.entries.slice();
  }
}

// Usage

const savings: SavingsAccount = {
  id: 'S-1',
  balance: 1000,
  kind: 'savings',
  rate: 0.02,
};

const credit: CreditAccount = {
  id: 'C-1',
  balance: 0,
  kind: 'credit',
  limit: 2000,
};

const ledgerSavings = new Ledger<SavingsAccount>();
const ledgerCredit = new Ledger<CreditAccount>();

const s1 = ledgerSavings.record(savings, { kind: 'deposit', amount: 200 });
const s2 = ledgerSavings.record(s1, { kind: 'withdraw', amount: 50 });

const c1 = ledgerCredit.record(credit, { kind: 'deposit', amount: 500 });
const c2 = ledgerCredit.record(c1, { kind: 'withdraw', amount: 150 });

console.dir({ s2, c2 });
console.log('Savings entries:', ledgerSavings.getAll());
console.log('Credit entries:', ledgerCredit.getAll());
