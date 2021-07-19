# JavaScript Class Practice Phase 1 - Class Syntax

In this exercise, you will be creating a class by creating a constructor and
defining static and instance methods.

## Directions

You will implement all your code in **class-practice.js**.

Create a class `Person` that has the following:

1. instance variables that include `firstName`, `lastName` and `age`
2. an instance method called `introduce` that will introduce the person by using
   `console.log` with a string saying, "Hi, I'm `<firstName>` `<lastName>`, and
   I'm `<age>` years old.".
3. a static method called `introducePeople` that will take in an array of
   `Person` instances. Have the method `console.log` an error message if the
   argument is not of type `Array`. Have the method `console.log` an error
   message if the any of the items in the array are not instances of the
   `Person` class. If there are no errors logged to the console, call
   `introduce` on each of the `People` instances in the input array.
4. Run `npm test test/part1-spec.js` to test that you have created the class
   correctly.