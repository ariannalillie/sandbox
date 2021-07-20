/* ============================ Phase 1 ============================ */
// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
  }
  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error ("introducePeople only takes an array as an argument.");
    }

    for (let person of people) {
      if (!(person instanceof Person))
        throw new Error ("All items in array must be Person class instances.");
    }

    people.forEach((person) => person.introduce());
  }
}


/******************************************************************* */
/* ============================ Phase 2 ============================ */
// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`
    }
    return `${student2.firstName} ${student2.lastName} has the higher GPA.`
  }
  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I study ${this.major}.`;
  }

}

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    teachers.forEach(teacher => {
      sum += teacher.yearsOfExperience;
    })
    return sum;
  }
  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I have been teaching ${this.subject} for ${this.yearsOfExperience} years.`;
  }
}

module.exports = {
  Person,
  Student,
  Teacher,
};
