/**
 * Find a^b 
 * 3^6 => 3^110
 * take last bit = n & 1
 * right shift n => n >> 1
 * if last_bit != 0 ans = ans * base
 * base = base *  base
 * Complexity: log(n)
 */

function findThePower(base: number, power: number): number {
    let ans = 1;
    while (power > 0 ) {
        const last_bit = power & 1;
        if (last_bit == 1) {
            ans *= base;
        }
        base *= base;
        power = power >> 1;
    } 
    return ans;
}

console.log(findThePower(3,6));