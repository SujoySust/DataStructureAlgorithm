function maximumConsecutiveOne(nums: number[]): number {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

{{
    const case1 = maximumConsecutiveOne([1,1,0,1,1,1])
    const case2 = maximumConsecutiveOne([1,0,1,1,0,1])
    case1;
    case2;
}}