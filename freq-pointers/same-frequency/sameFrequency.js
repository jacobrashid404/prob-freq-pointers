
// Convert integers into strings
// Check whether strings are same length
// if not, return false
// Count frequencies of digits within each integer
// Loop through stringified num1 counts
// First check if that num is in num2 counter; return false if not
// If true, then check if frequency is strictly equal in both counters
// Return false if not
// After loop ends, return true


/**
 * Checks whether two positive integers have the same frequency of digits.
 * Inputs: two positive integers, num1 and num2
 * Output: True or false
 */

function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    if (num1Str.length !== num2Str.length) return false;

    const num1Counts = getFreqs(num1Str);
    const num2Counts = getFreqs(num2Str);

    for (let digit in num1Counts) {
        if (!(digit in num2Counts)) return false;

        if (num1Counts[digit] !== num2Counts[digit]) return false;
    }

    return true;
}

/** Takes in string of numbers, and returns an object with digit frequencies */
function getFreqs(items) {
    const freqs = {};
    for (const item of items) {
        // Note: Could shortern below further by incrementing in line 42
        const currCount = freqs[item] || 0;
        freqs[item] = currCount + 1;
    }

    return freqs;
}

export { sameFrequency };
