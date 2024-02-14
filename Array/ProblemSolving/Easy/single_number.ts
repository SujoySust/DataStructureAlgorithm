function singleNumberBruteForce(nums: number[]): number {
    const hash:{[key: number]: number} = {};
    for (let i = 0; i< nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] ++;
        }
    }

    for (const key in hash) {
        if (hash[key] == 1) return Number(key);
    }
    return -1;
}

function singleNumberOptimal(nums: number[]): number {
    return nums.reduce((value, item) => value ^ item, 0);
}

{{
    const case1 = singleNumberBruteForce([2,2,1])
    const case2 = singleNumberBruteForce([4,1,2,1,2])
    const case3 = singleNumberOptimal([2,2,1])
    const case4 = singleNumberOptimal([4,1,2,1,2])
    case1;
    case2;
    case3;
    case4;
}}