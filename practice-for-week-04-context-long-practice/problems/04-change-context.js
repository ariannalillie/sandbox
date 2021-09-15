function changeContext(func, obj) {
  // The bind() method creates a new function that, when called,
  // has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
  let boundFunc = func.bind(obj);
  return boundFunc();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
