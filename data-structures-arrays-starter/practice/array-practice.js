const findMinimum = arr => {
  return (arr.length === 0 ? undefined : Math.min(...arr))

  // if (arr.length === 0) return undefined
  // return Math.min(...arr)

};


// [1,2,3,4] => [1,3,6,10]
const runningSum = arr => {

  let newArr = []
  let total = 0;
  arr.forEach((num) => {
    total += num;
    newArr.push(total);
  })
  return newArr;
};


// return the amount of strings in the array that have an even amount of characters
const evenNumOfChars = arr => {
  let count = 0;

  arr.forEach(word => {
    if (word.length % 2 === 0) count++;
  });
  return count;
};


// smallerThanCurr([8,1,2,2,3]) => [4,0,1,1,3]
const smallerThanCurr = arr => {

  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i];
    for (let j = 1; j < arr.length; j++) {
      let count = 0
      let num2 = arr[j];
      if (num1 > num2)
        count++;
    }
    newArr.push(count);
  }
  return newArr
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      if ((num1 + num2) === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {

  // Your code here

  return secondLargest;
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
