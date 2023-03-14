/**
 * Find the number of digits in base
 * logb(a) = x
 * a = b^x
 * No of digits in base b = int(logb(n)) + 1
 * Complexity log(n)
 */

function noOfDigits (num: number, base: number): number {
    return Math.floor(Math.log(num) / Math.log(base)) + 1;
}

console.log(noOfDigits(1000,10));