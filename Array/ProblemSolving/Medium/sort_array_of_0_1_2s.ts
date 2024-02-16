function sortArrayOfOs1s2s (nums: number[]) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) zeros++;
        else if (nums[i] == 1) ones++;
        else if (nums[i] == 2) twos++;
    }

    let len = zeros;
    for (let i = 0; i < zeros; i++) {
        nums[i] = 0;
    }

    len = len + ones;

    for (let i = zeros; i < zeros + ones; i++) {
        nums[i] = 1;
    }

    len = len + twos;
    
    for (let i = zeros + ones; i < zeros + ones + twos; i++) {
        nums[i] = 2;
    }

    return nums;
}

{{
    const nums = sortArrayOfOs1s2s([0,1,2,0,1,2,1,2,0,0,0,1]); 
    console.log(nums)
}}