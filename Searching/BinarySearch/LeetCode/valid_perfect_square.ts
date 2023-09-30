function isPerfectSquare(num: number): boolean {
    if (num == 1) return true;
    
    let start = 2;
    let end = Math.floor(num/2);

     while(start <= end) {
        const mid = start + Math.floor((end-start)/2);
        if (mid * mid == num) {
            return true;
        } else if (mid * mid > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
     }
     return false;
};

console.log(isPerfectSquare(8));
