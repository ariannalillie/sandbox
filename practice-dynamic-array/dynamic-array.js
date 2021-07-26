class DynamicArray {

  constructor(defaultSize=4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {

    // if the index we are looking for is >= the length then it is not in our data set
    if (index >= this.length) return undefined;

    // otherwise we want to return our array at the index we are looking for
    return this.data[index];
  }

  unshift(val) {

    // Fill this out
    // You may not use any built-in JS array functions

  }

}


module.exports = DynamicArray;
