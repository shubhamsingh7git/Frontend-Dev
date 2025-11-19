class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log("Balance:", acc.getBalance());

try {
  acc.withdraw(2000);
} catch (e) {
  console.log("Error:", e.message);
}

console.log("Final Balance:", acc.getBalance());
