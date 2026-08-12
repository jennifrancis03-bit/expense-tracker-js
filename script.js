/*
  Expense Tracker - script.js

  - Part 1: Declare six expense variables (numbers)
  - Part 2: Check each expense and flag "High Spending" when > $100
  - Part 3: Store expenses in an array and calculate total using a loop
  - Part 4: Compare total to monthly income and log budget status
*/

// Part 1 - Sample expenses (numeric values)
let rent = 450;
let food = 120;
let transport = 80;
let internet = 110;
let entertainment = 60;
let utilities = 95;

// Part 2 - Flag High Spending for each expense individually
function checkExpense(name, amount) {
  if (amount > 100) {
    console.log(`${name}: High Spending`);
  } else if (amount === 100) {
    console.log(`${name}: Borderline Spending (exactly $100)`);
  } else {
    console.log(`${name}: Normal Spending`);
  }
}

console.log('--- Expense Checks ---');
checkExpense('Rent', rent);
checkExpense('Food', food);
checkExpense('Transport', transport);
checkExpense('Internet', internet);
checkExpense('Entertainment', entertainment);
checkExpense('Utilities', utilities);

// Part 3 - Calculate Total using an array and a loop (no manual addition)
const expenses = [rent, food, transport, internet, entertainment, utilities];
let totalExpenses = 0;
for (const amount of expenses) {
  totalExpenses += amount;
}
console.log('');
console.log(`Total Expenses: $${totalExpenses}`);

// Part 4 - Budget Check against monthly income
let monthlyIncome = 800; // adjust this to test different scenarios
console.log(`Monthly Income: $${monthlyIncome}`);
if (monthlyIncome > totalExpenses) {
  console.log('Status: Within Budget');
} else if (monthlyIncome === totalExpenses) {
  console.log('Status: Exactly Break-even');
} else {
  console.log('Status: Over Budget');
}

// End of script
