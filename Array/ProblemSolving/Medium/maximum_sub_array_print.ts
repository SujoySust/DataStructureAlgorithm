function maximumSubArrayPrintSol1(nums: number[]) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const newArr: number[] = [];
            for (let k = i; k < j; k++) {
                newArr.push(nums[k]);
            }
        }
    }
}

{{
    maximumSubArrayPrintSol1([-2,-3,4,-1,-2,1,5,-3])
}}