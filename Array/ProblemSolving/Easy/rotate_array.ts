function rotateArrayBruteForce(nums: number[], k: number): void {
    const newArr: number[] = [];
    let start = nums.length - k;
    for (let i = start; i< nums.length; i++) {
        newArr.push(nums[i]);
    }
    for (let i = 0; i < start; i++) {
        newArr.push(nums[i]);
    }
    nums = newArr;
    console.log(nums);
}

function rotateArrayOptimal(nums: number[], k: number): void {
    const length = nums.length;
    k = k % length;
    nums = reverseArray(nums, 0, length - k - 1);
    nums = reverseArray(nums, k, length - 1);
    nums = reverseArray(nums, 0, length - 1);
    console.log(nums);
}

function reverseArray(nums: number[], start = 0, end = nums.length) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start ++;
        end --;
    }
    return nums;
}

console.log(rotateArrayOptimal([1, 3, 6, 11, 12, 17], 4));