function bindToAnArg(func, arg) {
  // we need to pass in the first argument for bind which provides
  // the this context. In this case, it would be null
  // It’s null because the passed in func will be different each time,
  //so we don’t want to provide a context so that it will work with any passed in function
  return func.bind(func, arg)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
