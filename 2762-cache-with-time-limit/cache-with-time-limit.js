var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExists = this.cache.has(key);
    
    // If the key already exists and hasn't expired, cancel its old cleanup timer
    if (alreadyExists) {
        clearTimeout(this.cache.get(key).timerId);
    }
    
    // Schedule a new cleanup timer to delete the key when it expires
    const timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);
    
    // Store or overwrite the entry
    this.cache.set(key, { value, timerId });
    
    return alreadyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */