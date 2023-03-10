
/**
 * Set mismatch problem
 * Cyclic sort
 * https://leetcode.com/problems/set-mismatch/
 */
class SetMismatch {
    findErrorNums(nums: number[]): number[] {
        let i = 0;
        while (i <= nums.length) {
            const correct = nums[i] - 1;
            if (nums[i] !== nums[correct]) {
                this.swap(nums, i, correct);
            } else {
                i++;
            }
        }

        for (let j=0; j<=i; j++) {
            if (nums[j] !== j+1 ) {
                return [nums[j], j+1];
            }
        }
        return [-1,-1];
    };

    swap(arr: Array<number>, first: number, second: number) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp; 
    }
}

console.log(new SetMismatch().findErrorNums([1,1]));
