// Todo List App
const readline = require("readline-sync");

let todos = [];

while (true) {
  console.log("\n1. Add Todo");
  console.log("2. View Todos");
  console.log("3. Delete Todo");
  console.log("4. Exit");

  const choice = readline.question("Choose an option: ");

  if (choice === "1") {
    const task = readline.question("Enter new todo: ");
    todos.push(task);
  } else if (choice === "2") {
    console.log("\nYour Todos:");
    todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  } else if (choice === "3") {
    const index = parseInt(readline.question("Enter index to delete: ")) - 1;
    if (index >= 0 && index < todos.length) todos.splice(index, 1);
  } else if (choice === "4") {
    console.log("Goodbye!");
    break;
  } else {
    console.log("Invalid option!");
  }
}
