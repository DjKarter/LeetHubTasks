/**
 * @param {Function} fn
 */
function memoize(fn) {
    const data = {};
    return function(...args) {
      const prop = args.toString();
      if (!Object.hasOwn(data, prop))
        data[prop] = fn(...args);
      return data[prop];      
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */