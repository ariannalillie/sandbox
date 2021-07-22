function isFive(num) {
  // Your code here
  if (num === 5) return true;
  return false;
}

function isOdd(number) {
  // Your code here
  if (!(typeof number === 'number')) {
    throw new Error('Input needs to be a valid number')
  }
  if (number % 2 === 0) return false;
  return true;
}

function myRange(min, max, step = 1) {
  // Your code here
  let newArr = [];
  for (let i = min; i <= max; i+=step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
