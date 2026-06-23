/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Create a cache storage space using Map
    const cache = new Map();
    
    return function(...args) {
        // Convert the arguments array into a unique string key
        const key = JSON.stringify(args);
        
        // If the key exists in the cache, return the cached value directly
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // Otherwise, execute the original function and save its result
        const result = fn(...args);
        cache.set(key, result);
        
        return result;
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