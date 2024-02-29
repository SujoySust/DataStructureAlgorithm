function rearrangeEleSol1(arr: number[]) {
    const pos: number[] = [];
    const neg: number[] = [];
    const n = arr.length;

    for(let i = 0; i < n; i++) {
        if (arr[i] > 0) pos.push(arr[i]);
        else neg.push(arr[i]);
    }

    for (let i = 0; i < Math.floor(n/2); i++) {
        arr[i * 2] = pos[i];
        arr[i * 2 + 1] = neg[i];
    }

    return arr;
}

function rearrangeEleSolOptimal(nums: number[]) {
    const n = nums.length;
    let posIndex = 0, negIndex = 1;
    const ans: number[] = [];
    for (let i=0; i< n; i++) {
        if(nums[i] < 0) {
            ans[negIndex] = nums[i];
            negIndex += 2;
        } else {
            ans[posIndex] = nums[i];
            posIndex += 2;
        }
    }
    return ans;
}

{{
    const case1 = rearrangeEleSol1([3,1,-2,-5,2,-4]);
    const case2 = rearrangeEleSolOptimal([3,1,-2,-5,2,-4]);
    case1; 
    case2;
}}