/**
 * Find the duplicate number
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Solution: 
 * nums[i] != i+1 
 */

class FindDuplicate {
    findDuplicate(nums: number[]): number {
        let i = 0;
        while (i < nums.length) {
            if (nums[i] != i+1) {
                const correct = nums [i] - 1;
                if (nums[i] !== nums[correct]) {
                    this.swap(nums, i, correct);
                } else {
                    return nums[i];
                }
            } else {
                i++
            }
            
        }
        
        return -1;
    };

    swap(arr: Array<number>, first: number, second: number) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp; 
    }
}

new FindDuplicate().findDuplicate([1,3,4,2,2]);