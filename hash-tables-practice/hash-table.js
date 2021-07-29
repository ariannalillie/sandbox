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
    // Given an input of any number of bits, SHA returns an output of 256 bits.
    // Then slice is used to give us the first 8 characters of the sha256 hash.
    const hashHexString = sha256(key).slice(0, 8);

    // Convert to int
    return parseInt(`0x${hashHexString}`);
  }

  // hashMod() will be used to generate a valid integer index for the data array.
  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Find the bucket index
    const index = this.hashMod(key);
    let currentPair = this.data[index];
    let lastPair = null;
    // while there are nodes in the linked list and we have not found the key
    while (currentPair && currentPair.key !== key) {
      lastPair = currentPair;
      currentPair = currentPair.next;
    }
    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }

}


module.exports = HashTable;
