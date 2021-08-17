// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    return (`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(person) {
    if (person )
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
