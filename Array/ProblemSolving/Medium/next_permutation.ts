function nextPermutation(nums: number[]) {
    let ind = -1;
    const n = nums.length;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            ind = i;
            break;
        }
    }

    if (ind == -1) {
        nums.reverse();
    } else {
        for (let i = n-1; i > ind; i--) {
            if (nums[i] > nums[ind]) {
                [nums[i], nums[ind]] = [nums[ind], nums[i]];
                break;
            }
        }
    
        nums.splice(ind+1,n-ind-1,...nums.slice(ind+1).reverse());
    }

   

    nums
}

{{
    nextPermutation([3,2,1]);
}}