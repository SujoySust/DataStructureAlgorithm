/**
 * Find the number of set bits
 * Example: 
 * n = 9 => 1001 => 2 
 */

function findNumberOfSetBits(n: number): number {
    let count = 0;
    while( n > 0 ) {
        const last = n & 1;
        if (last == 1) count ++
        n = n >> 1;
    }
    console.log(count);
    
    return count;
}

findNumberOfSetBits(197);