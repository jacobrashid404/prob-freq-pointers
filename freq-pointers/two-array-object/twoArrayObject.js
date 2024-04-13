

// delcare an empty object
// for loop through keys array
// - for each key, assign the key's value in the object to the same
//   index in the values array
//   - if values run out with remaining keys, assign the key's value to null
// return object

// ['x', 'y', 'z'], [1, 2]

// Include examples inside docstrings


/** Create an object using input arrays of keys and values
 * Input: 2 arrays, keys and values.
*  Output: An object with assigned keys and values. If values is shorter than
   keys, remaining values will be set to null, if keys is shorter than values
   extra values are ignored.
 */
function twoArrayObject(keys, vals) {
    // add white space between difference pieces below to separate them
    const pairs = {};
    for (let i = 0; i < keys.length; i++) {
        pairs[keys[i]] = vals[i] || null;
    }

    return pairs;
}

export { twoArrayObject };
