/**
 * Find All the duplicate number
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * Cyclic sort
 */

class FindAllTheDuplicate {
    findDuplicates(nums: number[]): number[] {
        let i = 0;
        while (i < nums.length) {
            const correct = nums[i] - 1;
            if (nums[correct] != nums[i]) {
                this.swap(nums, i, correct);
            } else {
                i++;
            }
        }
        const duplicateArray: number[] = [];

        for (let j = 1; j<=i ; j++) {
            if (nums[j-1] != j) {
                duplicateArray.push(nums[j-1]);
            }
        }

        return duplicateArray;
    }

    swap(arr: Array<number>, first: number, second: number) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp; 
    }
}

console.log(new FindAllTheDuplicate().findDuplicates([4,3,2,7,8,2,3,1]));
