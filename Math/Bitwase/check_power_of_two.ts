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

checkPowerOfTwo(16);
