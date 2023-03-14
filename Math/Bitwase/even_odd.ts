/**
 * number & 1 == 1 then the number is odd
 * @param num 
 */
function isEvenOdd(num: number) {
    if ((num & 1) == 1) {
        console.log('Odd');
    } else {
        console.log('Even');
        
    }
}

isEvenOdd(11);