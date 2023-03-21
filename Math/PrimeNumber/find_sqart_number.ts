/**
 * Find the square root of a number
 */

function findSquareRoot(num: number) {
    let start = 0;
    let end = num;
    let precision = 3;
    let root = 0; 
    while (start <= end) {
        const mid = start + Math.floor((end-start)/2);
        if (mid * mid == num) {
            return mid;
        } else if (mid * mid > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    let incr = 0.1;

    for (let i=0; i< precision; i++) {
        while (root * root <= num) {
            root += 0.1;
        }
        root -= incr;
        incr /= 10;
    }

    return root;
}

console.log(findSquareRoot(40));
