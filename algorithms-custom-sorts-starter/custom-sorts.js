

function ageSort(users) {
  // uses .age to key into age property 
  return users.sort((a, b) => (a.age - b.age));
}


function oddEvenSort(arr) {
  // Fill this in
}

function validAnagrams(s, t) {
  // Fill this in
}

function reverseBaseSort(arr) {
  // Fill this in
}

function frequencySort(arr) {
  // Fill this in
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];
