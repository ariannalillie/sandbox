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
function sayName(name) {}

try {
} catch (error) {}

// 3.
