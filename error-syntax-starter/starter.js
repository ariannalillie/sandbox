// 1.
function sum(array) {
  let sum = 0;
  // Add try surrounding the area that is throwing an error
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    // catch the error and handle it
  } catch(e) {
    handleError(e);
  }
  return sum;
}

function handleError(error) {}

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {
  // if name isn't a string throw an error
  if (!(typeof name === 'string')) {
    throw new Error('Name must be a string')
  }
  console.log(name);
}


// 3.
try {
  // Runs correctly
  sayName('lillie');
  // Throws error
  // sayName(45);
} catch (error) {
  console.log(error)
}

// 4.
// Validation Error
class ValidationError extends Error() {}
  throw new ValidationError('Passwords fields must match!')
