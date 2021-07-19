# JavaScript Class Practice Phase 3 - Polymorphism

**Polymorphism** is a principle which allows one method to have different
implementations for inherited classes. In this practice, you will be writing
code which demonstrates this principle.

You will continue with the same file you downloaded in phases 1 and 2 from the
[starter].

## Directions

Overwrite `Person`'s `introduce` instance method in `Student` and `Teacher`
classes.

1. `Student`'s `introduce` should `console.log`: "Hello. I am `<firstName>`
   `<lastName>`, and I study `<major>`."
2. `Teacher`'s `introduce` should `console.log`: "Hello. I am `<firstName>`
   `<lastName>`, and I have been teaching `<subject>` for `<yearsOfExperience>`
   years."

Run `npm test test/part3-spec.js` to test that you have created the class
correctly.

[starter]: https://github.com/appacademy/practice-for-week-04-class-practice