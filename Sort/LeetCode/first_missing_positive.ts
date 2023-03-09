/**
 * First missing positive
 * https://leetcode.com/problems/first-missing-positive/
 */

function firstMissingPositive(nums: number[]): number {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j++;
            }
        }
        
        // Mark indices that correspond to positive integers
        for (let i = 0; i < j; i++) {
            let idx = Math.abs(nums[i]) - 1;
            if (idx < j && nums[idx] > 0) {
                nums[idx] = -nums[idx];
            }
        }
        
        // Find the first missing positive integer
        for (let i = 0; i < j; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        
        return j + 1;
};