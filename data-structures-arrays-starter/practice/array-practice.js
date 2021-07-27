const findMinimum = arr => {
  return (arr.length === 0 ? undefined : Math.min(...arr))

  // if (arr.length === 0) return undefined
  // return Math.min(...arr)

};

const runningSum = arr => {

  let newArr = []
  let total = 0;
  arr.forEach((num) => {
    total+= num;
    newArr.push(total);
  })
  return newArr;
};

// [1,2,3,4] => [1,3,6,10]

const evenNumOfChars = arr => {

  let words = arr.slice(' ')
  console.log(words)
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here

  return secondLargest;
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
