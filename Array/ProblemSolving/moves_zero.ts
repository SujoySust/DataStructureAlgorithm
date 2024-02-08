function movesZeroBruteForce(nums: number[]): void {
    let count = 0;
    let i = 0;
    let len = nums.length;
    while (i < len) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            count ++;
            len --;
        } else {
            i++
        }
    }

    for (let i = 0; i < count; i ++) {
        nums.push(0);
    }
}

movesZeroBruteForce([0,1,0,3,12]);