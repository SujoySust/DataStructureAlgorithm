function leaderInArray(nums: number[]) {
    const n = nums.length;
    const leaders: number[] = [];
    for (let i = 0; i < n; i++) {
        let flag = true;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > nums[i]) {
                flag = false;
                break;
            }
        }

        if (flag) leaders.push(nums[i]);
    }

    return leaders;
}

function leaderInArrayOptimal(nums: number[]) {
    const n = nums.length;
    const ans: number[] = [];
    let max = nums[n-1];
    ans.push(nums[n-1]);
    for (let i = n-2; i >=0; i --) {
        if(nums[i] > max) {
            ans.push(nums[i])
            max = nums[i];
        }
    }
    return ans;
}

{{
    const case1 = leaderInArray([10, 22, 12, 3, 0, 6])
    const case2 = leaderInArray([4, 7, 1, 0])
    const case3 = leaderInArrayOptimal([4, 7, 1, 0])
    case1;
    case2;
    case3;
}}