class DynamicArray {

  constructor(defaultSize = 4) {
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

    // store popped value as a variable
    const poppedVal = this.data[this.length - 1]
    // set last value in this array to be null
    this.data[this.length - 1] = null;
    // decrement the length
    this.length--;
    // return the value we popped off
    return poppedVal;
  }


  // The shift() method removes the first element from an array and returns that removed element.
  // This method changes the length of the array.
  shift() {

    // store shifted value as a variable
    const shiftedVal = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    this.data[this.length] = undefined;

    return shiftedVal;
  }

  unshift(val) {

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}



module.exports = DynamicArray;
