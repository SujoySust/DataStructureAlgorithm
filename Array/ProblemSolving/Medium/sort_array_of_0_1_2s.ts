function sortArrayOfOs1s2sSol1 (nums: number[]) {
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

function sortArrayOfOs1s2sSol2(nums: number[]) {
    let low = 0;
    let mid = 0; 
    let high = nums.length - 1;
    while (mid <= high) {
        if(nums[mid] == 0) {
            const temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low ++;
            mid ++;
        } else if (nums[mid] == 1) {
            mid ++;
        } else {
            const temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high --;
        }
    }
    return nums;
}

{{
    // const case1 = sortArrayOfOs1s2sSol1([2,0,2,1,1,0]); 
    // const case2 = sortArrayOfOs1s2sSol1([2,0,1]); 

    // const case3 = sortArrayOfOs1s2sSol2([2,0,2,1,1,0]); 
    const case4 = sortArrayOfOs1s2sSol2([2,0,1]); 

    // console.log(case1);
    // console.log(case2);
    // console.log(case3);
    console.log(case4);
}}