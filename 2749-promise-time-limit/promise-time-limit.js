/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // 1. Start a timer that rejects after 't' milliseconds
            const timerId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // 2. Execute the original async function
            fn(...args)
                .then((result) => {
                    clearTimeout(timerId); // Clear timer if fn resolves in time
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timerId); // Clear timer if fn rejects/errors out in time
                    reject(error);
                });
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */