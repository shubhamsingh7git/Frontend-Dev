let bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000;
  let total = salary;
  if (isPermanent) {
    total += bonus;
  }
  console.log("Is Permanent:", isPermanent);
  console.log("Total Salary:", total);
}

calculateSalary(true);
console.log("Global Bonus After Permanent:", bonus);

calculateSalary(false);
console.log("Global Bonus After Non-Permanent:", bonus);
