/**
 * Find ith bit of number
 * n => mask with n-1 zeros
 * Ans n & (1 << (n-1))
 * @param n 
 * @returns 
 */
function findNthBitOfNumber(n: number) {
    return n && (1 << n-1);
}

console.log(findNthBitOfNumber(3));
