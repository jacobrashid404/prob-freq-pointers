
/** Takes two params: nums (a sorted array of numbers), and a num for targetAvg.
 * Returns a boolean:
 *    true if at least one pair's avg equals targetAvg, false if not.
*/

function averagePair(nums, targetAvg) {

    if (nums.length <= 1) return false;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const avg = (nums[left] + nums[right]) / 2;

        if (avg === targetAvg) {
            return true;
        } else if (avg > targetAvg) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

export { averagePair };
