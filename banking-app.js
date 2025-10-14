// Banking App
const readline = require("readline-sync");

const account = {
  owner: "Dara",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) console.log("Insufficient funds!");
    else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. Remaining balance: $${this.balance}`);
    }
  },
};

while (true) {
  console.log("\n1. Deposit\n2. Withdraw\n3. Exit");
  const choice = readline.question("Choose an option: ");

  if (choice === "1") {
    const amt = parseFloat(readline.question("Enter amount: "));
    account.deposit(amt);
  } else if (choice === "2") {
    const amt = parseFloat(readline.question("Enter amount: "));
    account.withdraw(amt);
  } else if (choice === "3") {
    console.log("Goodbye!");
    break;
  } else {
    console.log("Invalid choice!");
  }
}
