const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.employees = [];
    }
}

module.exports = Manager;
