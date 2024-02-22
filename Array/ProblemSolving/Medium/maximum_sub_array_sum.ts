function maximumSubArraySumSol1(nums: number[]) {
    const len = nums.length;
    let maxLen = - 100000;
    if (len == 1) return nums[0];
    for (let i = 0; i< len; i++) {
        let sum = 0;
        for (let j = i; j < len ;j++) {
            sum += nums[j];
            if (sum > maxLen) {
                maxLen = sum;
            }
        }
    }
    return maxLen;
}

function maximumSubArraySumSol2(nums: number[]) {
    const len = nums.length;
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i< len; i++) {
       sum += nums[i];
       if (sum > max) max = sum;
       if (sum < 0) sum = 0;
    }
    return max;
}

{{
    // const case1 = maximumSubArraySumSol1([-2,1,-3,4,-1,2,1,-5,4]); case1;
    // const case2 = maximumSubArraySumSol1([1]); case2;
    // const case3 = maximumSubArraySumSol1([-2, 1]); case3;
    // const case4 = maximumSubArraySumSol1([-2, -1]); case4;
    const case4 = maximumSubArraySumSol2([-2, -1]); case4;
}}