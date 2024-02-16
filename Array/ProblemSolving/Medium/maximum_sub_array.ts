function maximumSubArraySolution1(nums: number[], pos: number) : number {
    let len = 0;
    for (let i = 0; i< nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k]
            }
            if (sum == pos ) {
                if ( j - i + 1 > len) {
                    len = j - i + 1;
                }
            }
        } 
    } 

    return len;
}

function maximumSubArraySolution2(nums: number[], pos: number) : number {
    let len = 0;
    for (let i = 0; i< nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum == pos ) {
                if ( j - i + 1 > len) {
                    len = j - i + 1;
                }
            }
        } 
    } 

    return len;
}

function maximumSubArraySolution3 (nums: number[], k: number): number {
    const n = nums.length;
    const preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for(let i = 0; i < n; i++) {
        sum += nums[i];
        if (sum == k) {
            maxLen = Math.max(maxLen, i+1);
        }

        const rem = sum - k;
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        if(!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }
    
    return maxLen;
}

function maximumSubArrayOptimal(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let sum = nums[0];
    let len = 0;
    const n = nums.length;

    while(right < n) {
        while(left <= right && sum > k) {
            sum -= nums[left];
            left++;
        }
        if (sum == k) {
            len = Math.max(len, (right - left + 1));
        }
    
        right ++;
        sum += nums[right];
    }

    return len;
}


{{
    const case1 = maximumSubArraySolution1([1, 2, 3, 1, 1, 1, 4, 2, 3, 1], 3);
    const case2 = maximumSubArraySolution2([1, 2, 3, 1, 1, 1, 4, 2, 3, 1], 3);
    const case3 = maximumSubArraySolution3([1, 2, 3, 1, 1, 1, 4, 2, 3, 1], 3);
    const case4 = maximumSubArrayOptimal([1, 2, 3, 1, 1, 1, 4, 2, 3, 1], 3);
    case1;
    case2;
    case3;
    case4;
}}
