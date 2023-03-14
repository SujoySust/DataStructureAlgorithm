/**
 * Find the sum of nth row in pascal triangle
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 * 1 5 10 10 5
 * nC0 + nC1 + nC2 + nC3 +.....+ nCn = 2^n
 * For n th row, sum = 2 ^ n -1 
 * Answer: 1 << (n-1) = 11 * 2 ^n-1
 * 
 */

function pascalTriangle(row: number): number {
    return 1 << (row-1);
}

console.log(pascalTriangle(5));
