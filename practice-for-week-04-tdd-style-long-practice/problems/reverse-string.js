// module.exports = function reverseString(string) {
//   let newArr = [];
//   for (let i = string.length; i >= 0; i--) {
//     newArr.push(string[i])
//   }
//   return newArr.join('');
// };

module.exports = function reverseString(string) {
  return [...string].reverse().join("");
};
