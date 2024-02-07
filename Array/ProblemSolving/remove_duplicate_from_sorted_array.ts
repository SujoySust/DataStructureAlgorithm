function removeDuplicatesBruteForce(nums: number[]): number {
    const map: {[key: number]: number} = {};
    const newArr: number[] = [];
    for (let i = 0; i< nums.length; i++) {
        if (!map[nums[i]]) {
            newArr.push(nums[i]);
            map[nums[i]] = 1;
        }
    }
    return newArr.length;
};

function removeDuplicatesOptimal(nums: number[]): number {
    let i = 0;
    for (let j = 1; j< nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

console.log(removeDuplicatesBruteForce([1,1,1,1,2,2,3,3,3,4,5,5,5,6]))