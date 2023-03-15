/**
 * Find a number is power of 2 or not
 * If bits count of 1 is 1 then it will be the power of 2
 * Sol: Right shift while number is zero and count the 1
 */

function checkPowerOfTwo(num: number) {
    let count = 0;
    while(num > 0) {
        const last = num & 1;
        if (last == 1) {
            count ++;
        }
        num = num >> 1;
    }

    if (count == 1) {
        console.log('Yes')
    } else {
        console.log('No');    
    }
}

/**
 * Power of two has only 1 and as many zeros (ex: 1000000)
 * Take n-1 = 01111111
 * If n & (n-1) == 0 then it will be the power of two
 * @param num 
 */

function checkPowerOfTwoOtherApp(num: number) {
    const result = num &(num-1);
    if (result == 0) {
        console.log('Yes')
    } else {
        console.log('No');    
    }
}

checkPowerOfTwoOtherApp(16);
