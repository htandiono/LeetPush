/**
 * @param {Function[]} functions
 * @return {Promise<any[]>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;

        functions.forEach((fn, index) => {
            try {
                fn()
                    .then((value) => {
                        results[index] = value;
                        completed++;

                        if (completed === functions.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);
            } catch (error) {
                reject(error);
            }
        });
    });
};