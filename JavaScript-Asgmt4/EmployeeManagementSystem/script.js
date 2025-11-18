class Employee {
  constructor(id, name, department, salary) {
    this.id = id
    this.name = name
    this.department = department
    this.salary = salary
  }

  getAnnualSalary() {
    return this.salary * 12
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100)
  }
}

const employees = [
  new Employee(1, "John", "HR", 30000),
  new Employee(2, "Asha", "Finance", 45000),
  new Employee(3, "Rohan", "IT", 50000),
  new Employee(4, "Megha", "Sales", 35000),
  new Employee(5, "Amit", "Marketing", 40000)
]

employees.forEach(e => e.applyBonus(10))

employees.forEach(e => {
  console.log(e.name, "Annual Salary:", e.getAnnualSalary())
})

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0)

console.log("Total Annual Payout:", totalPayout)
