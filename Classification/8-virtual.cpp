// Subtype polymorphism: virtual functions and methods

#include <iostream>
#include <string>
#include <vector>

class Account {
public:
  explicit Account(int balance) : balance(balance) {}
  virtual ~Account() = default;

  virtual std::string describe() const {
    return "Balance: " + std::to_string(balance);
  }

protected:
  int balance;
};

class SavingsAccount : public Account {
public:
  using Account::Account;

  std::string describe() const override {
    return "Savings -> " + Account::describe();
  }
};

class CreditAccount : public Account {
public:
  using Account::Account;

  std::string describe() const override {
    return "Credit -> " + Account::describe();
  }
};

int main() {
  std::vector<Account*> accounts;
  accounts.push_back(new SavingsAccount(5000));
  accounts.push_back(new CreditAccount(-750));

  for (const auto& account : accounts) {
    std::cout << account->describe() << '\n';
  }
}
