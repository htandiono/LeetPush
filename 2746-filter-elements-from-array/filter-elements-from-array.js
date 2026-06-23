/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // Initialize an empty array to collect values that pass the condition
    const filteredArr = [];
    
    // Iterate through the array manually using a traditional loop
    for (let i = 0; i < arr.length; i++) {
        // Check and save the item that satisfied the condition set
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};