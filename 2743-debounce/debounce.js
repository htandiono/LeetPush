/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutId;

    return function (...args) {
        const context = this;

        // Cancel the previously scheduled execution.
        clearTimeout(timeoutId);

        // Schedule a new execution.
        timeoutId = setTimeout(() => {
            fn.apply(context, args);
        }, t);
    };
};