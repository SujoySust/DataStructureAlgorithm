/**
 * Find magic number
 * convert n into binary and add it with increasing power
 * For example
 * 1 => 1 = 1 * 5 = 5
 * 2 => 10 => 0*5^1 + 1*5^2 => 25
 * 3 => 11 => 1*5^1 + 1*5^2 => 30
 * ....
 * @param n 
 * @returns 
 */

function magicNumber(n: number) {
    let ans = 0;
    let base = 5;
    while (n > 0) {
        const last = n & 1;
        n = n >> 1;
        ans += last * base;
        base = base * 5; 
    }
    return ans;
}

console.log(magicNumber(5));
