// employee class
class Employee {
    constructor(name, title, salary, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    // bonus method
    bonus(multiplier) {
       bonus = this.salary * multiplier;
       return bonus;
    }
}


module.exports = Employee;
