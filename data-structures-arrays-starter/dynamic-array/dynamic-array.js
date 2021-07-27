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

  push(val) {

    
  }


  pop() {

    // Your code here
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
