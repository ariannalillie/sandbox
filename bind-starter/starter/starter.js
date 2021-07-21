class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    sayName() {
        console.log(this.name);
    }
    sayOccupation() {
        console.log(this.occupation)
    }
}

const testEmployee = new Employee (
    'Bob',
    'Cook'
)

setTimeout(() => {
    testEmployee.sayName()
}, 2000)

const sayNameBound = testEmployee.sayName.bind(testEmployee);
const sayOccupationBound = testEmployee.sayOccupation.bind(testEmployee);

setTimeout(sayNameBound, 2000);
setTimeout(sayOccupationBound, 3000);
