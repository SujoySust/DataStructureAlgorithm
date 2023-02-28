function arrangeCoins(n: number): number {
    let start = 0;
    let end = n;
    while (start <= end) {
        const mid = start + Math.floor((end - start)/2);
        const c = Math.floor((mid * (mid+1))/2);
        if (c == n) {
            return mid;
        } else if (c < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;
};

console.log(arrangeCoins(5));
