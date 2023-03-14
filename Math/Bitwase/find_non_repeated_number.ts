/**
 * Find a number that is not repeated in given array
 * arr = [2,3,4,1,2,1,3,6,4];
 * answer is 6
 * Sol: XOR of two same number is zero. So XOR all the number
 */

function findNonRepeatedNumber(arr: Array<number>) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }

    console.log(result);
    
}

findNonRepeatedNumber([-2,3,2,4,-5,5,-4]);