// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0 ; i < key.length ; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {
    // find the index of the bucket that the key will be stored in.
    const index = this.hashMod(key);

    // the currentPair is the head node of the linked list in the bucket that our key is in.
    let currentPair = this.data[index];

    // while there are still nodes to index through we are going to keep searching until
    // we find the key that matches the key we are looking for and if we do we are going to
    // return the value.
    while (currentPair) {
      if (currentPair.key == key) {
        return currentPair.value;
      }
      currentPair = currentPair.next;
    }

    // Otherwise, return undefined.
    return undefined;
  }


  insert(key, value) {

        // Find the bucket index
        const index = this.hashMod(key);

        let currentPair = this.data[index];
        let lastPair = null;

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


  resize() {
    // must store the old data because we need
    // to re-hash to data when putting it back in now that the hash table sixze has changed
    // Fill this in

  }


  delete(key) {

    // Fill this in

  }

}


module.exports = HashTable;
