class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
    // Your code here

    // Read specs for details

  }

  read(index) {
    if (index >= this.length) return undefined;

    return this.data[index];
  }


  // The push() method adds one or more elements to the end of an
  // array and returns the new length of the array.
  push(val) {

    // adds the new val to the end of the array
    this.data[this.length] = val;
    // increments the length
    this.length++;

  }


  // The pop() method removes the last element from an array and returns that element.
  // This method changes the length of the array.
  pop() {

    // stored popped value as a variable
    const poppedVal = this.data[this.length - 1]
    // set last value in this array to be null
    this.data[this.length - 1] = null;
    // decrement the length
    this.length--;
    // return the value we popped off
    return poppedVal;
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf (val) {

    // Your code here
  }

  resize () {

    // Your code here
  }

}


module.exports = DynamicArray;
