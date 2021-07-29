function anagrams(str1, str2) {

  const sortedStr1 = str1.sort((a, b) => a - b);
  const sortedStr2 = str2.sort((a, b) => a - b);

  console.log(sortedStr1);
  console.log(sortedStr2)

  // if (sortedStr1 == sortedStr2) {
  //   return true;
  // }
  // return false;
}


function commonElements(arr1, arr2) {

  // Fill this in

}


function duplicate(arr) {

  // Fill this in

}


function twoSum(nums, target) {

  // Fill this in

}


function wordPattern(pattern, strings) {

  // Fill this in

}


function wordPattern(pattern, strings) {

  // Fill this in

}

anagrams('elvis', 'lives')


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
