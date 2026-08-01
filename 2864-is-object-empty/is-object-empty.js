/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    for (const key in obj) {
        return false;
    }

    return true;
};