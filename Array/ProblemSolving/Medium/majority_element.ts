 function majorityElementSolution1(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i< len; i++) {
        let count = 0;
        for(let j = 0; j < len; j++) {
            if (nums[i] == nums[j]) {
                count ++;
            }
        }
        if (count > Math.floor(len/2)) {
            return nums[i];
        }
    }
    return - 1;
 }

 function majorityElementSolution2(nums: number[]) {
    const map = new Map();
    const len = nums.length;
    const n = Math.floor(len/2);
    for(let i =0; i< len; i++) {
        const count = map.get(nums[i]);
        if (count) {
            map.set(nums[i], count + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for(const [key, value] of map) {
       if (value > n) return key;
    }
    return -1;
 }

 function majorityElementMoonVotingAlgo(nums: number[]) {
    let count = 0;
    let ele: number = 0;
    const len = nums.length;

    for (let i = 0; i< nums.length; i++) {
        if (count == 0) {
            count++;
            ele = nums[i];
        } else if (nums[i] == ele) {
            count ++;
        } else {
            count --;
        }
    }

    let ele_count = 0;

    for (let i =0; i < nums.length; i++) {
        if (nums[i] == ele) {
            ele_count ++;
        }
    }

    if (ele_count > Math.floor(len/2)) {
        return ele;
    }

    return - 1;

 }

 {{
    const case1 = majorityElementSolution1([1,2,2,3,3,2,4,2,2,2]); case1;
    const case2 = majorityElementSolution2([1,2,2,3,3,2,4,2,2,2]); case2;
    const case3 = majorityElementMoonVotingAlgo([1,2,2,3,3,2,4,2,2,2]); case3;
    
 }}