// NOTES: This.length returns the number of items in an array, but since arrays are 0 indexed,
// array[array.length - 1] returns the last item in the array.

class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {
    // if the index is greater than the last index then return undefined
    if (index >= this.length) return undefined;

    // return the array at the index we are looking for
    return this.data[index];
  }


  // The push() method adds one or more elements to the end of an
  // array and returns the new length of the array.
  push(val) {

    if (this.length >= this.capacity) this.resize();

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

  // The unshift() method adds one or more elements to the beginning
  // of an array and returns the new length of the array.
  unshift(val) {
    

    if (this.length >= this.capacity) this.resize();

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  // The indexOf() method returns the first index at which a given
  // element can be found in the array, or -1 if it is not present.
  indexOf(val) {

    // iterate through the array
    for (let i = 0; i < this.data.length; i++) {
      // as soon as we find the value we are looking for, return the index
      if (this.data[i] === val) {
        return i;
      }
    }
    // if we don't find the value, return -1
    return -1;
  }

  resize() {

    // double the capacity size
    this.capacity *= 2;
    // create a new array that is double the size of the previous
    const newData = new Array(this.capacity);

    // fill in the new array with the old data
    for (let i = 0 ; i < this.length ; i++) {
      newData[i] = this.data[i];
    }

    // set the old array equal to the new array
    this.data = newData;
  }

}



module.exports = DynamicArray;
