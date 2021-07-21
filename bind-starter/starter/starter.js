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

// if set up like this, the return will be undefined because
// the context of THIS is lost. Therefore, we can use bind() to
// bind our method to our testEmployee so we do not lose context.
setTimeout(testEmployee.sayName, 2000)

// works using annonymous callback
// setTimeout(() => testEmployee.sayName(), 2000)

const sayNameBound = testEmployee.sayName.bind(testEmployee);
const sayOccupationBound = testEmployee.sayOccupation.bind(testEmployee);

setTimeout(sayNameBound, 2000);
setTimeout(sayOccupationBound, 3000);
