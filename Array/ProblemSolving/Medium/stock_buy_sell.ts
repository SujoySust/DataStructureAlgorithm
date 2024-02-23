function stockBuySell(nums: number[]) {
    let maxPro = 0;
    let n = nums.length;
    let minPrice = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i< n; i++) {
        minPrice = Math.min(minPrice, nums[i]);
        maxPro = Math.max(maxPro, nums[i] - minPrice);
    }

    return maxPro;
}


{{
    const maxPro = stockBuySell([7,1,5,3,6,4]);
    maxPro;
}}