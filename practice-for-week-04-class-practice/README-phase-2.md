# JavaScript Class Practice Phase 2 - Inheritance

**Inheritance** is a mechanism that passes traits of a parent class to its
descendants, which helps prevents duplication of code. In this exercise, you
will be implementing two classes which demonstrate class inheritance in
JavaScript.

You will continue with the same file you downloaded in phase 1 from the
[starter].

## Directions

Create the following child classes for the parent class of `Person`.

### `Student` class

1. Create a new `Student` class and have its `constructor` call the `super()`,
   passing the parameters needed for a `Person` and a `constructor` function
   that takes in additional parameters for their `major` subject and `GPA`.
2. Create a static method called `compareGPA` which will take in two `Student`
   instances as the first and second parameter and return a string comparing
   the `GPA`s return "`<firstName>` `<lastName>` has the higher GPA." If they're
   equal, return "Both students have the same GPA."

### `Teacher` class

1. Create a new `Teacher` class and have its `constructor` call the `super()`,
   passing parameters needed for a `Person` and a `constructor` function that
   takes in additional parameters for the `subject` they teach and their
   `yearsOfExperience`.
2. Create a static method called `combinedYearsOfExperience` that takes in an
   array of `Teacher` instances, `teachers`, as a parameter and returns the sum
   of the `yearsOfExperience` of all `teachers`.

Run `npm test test/part2-spec.js` to test that you have created the classes
correctly.

[starter]: https://github.com/appacademy/practice-for-week-04-class-practice