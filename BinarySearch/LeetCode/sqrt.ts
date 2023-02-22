function mySqrt(x: number): number {
    if (x == 0) return x;
    let start = 1;
    let end = x;
    while (start <= end) {
        const mid  = start + Math.floor((end - start) /2);
        if (mid == Math.floor(x/mid)) {
            return mid;
        } else if(mid > Math.floor(x/mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
};

console.log(mySqrt(8));
