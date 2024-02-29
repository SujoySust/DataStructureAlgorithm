function longestConsecutiveSubsequence(nums: number[]) {
    let max = 0;
    const n = nums.length;
    for (let i = 0; i< n; i++) {
        let flag = true;
        let curr = nums[i];
        let count = 0;
        while(flag) {
           if(linearSerch(nums,curr++) > 0) {
             count++;
           } else {
            flag = false;
            if(count > max) max = count;
           }
        }
    }
    return max;
}

function linearSerch(nums: number[], ele: number) {
    for (let i =0; i< nums.length; i++) {
        if (nums[i] == ele) return i;
    }
    return -1;
}

{{
    const case1 = longestConsecutiveSubsequence([100, 200, 1, 3, 2, 4]); case1
    const case2 = longestConsecutiveSubsequence([3, 8, 5, 7, 6]); case2
}}