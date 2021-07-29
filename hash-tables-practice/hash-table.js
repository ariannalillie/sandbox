const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}


// The first step to implement a hash table is initializing an array of fixed size for data storage.
// Each slot in the array is called a "bucket" and is initialized to null.
class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // fill this in
  }

  hashMod(key) {
    // fill this in
  }

  insert(key, value) {
    // fill this in
  }

}


module.exports = HashTable;
