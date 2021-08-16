class DynamicArray {

  constructor(defaultSize=4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {
    if (!this.data[index]) return undefined;
    return (this.data[index])
  }

  unshift(val) {

    if (this.length === 0) 

  }

}


module.exports = DynamicArray;
