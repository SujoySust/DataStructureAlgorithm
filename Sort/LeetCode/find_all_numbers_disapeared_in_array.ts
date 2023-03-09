/**
 * Find all numbers disapeared in array
 * Tips: 
 * if range => [0,n] every element will be at index = value
 * if range => [1,n] every element will be at index = value - 1
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * 
 * Solution: Cyclic sort
 * if index != value - 1 swap
 */
class FindAllNumber {
    findAllNumbersDisapearedInArray(arr: Array<number>): Array<number> {
        let i = 0;
    
        while(i < arr.length) {
            const correct = arr[i] - 1;
            if (arr[i] !== arr[correct]) {
                this.swap(arr,i,correct);
            } else {
                i ++;
            }
        }
        const missingArray: Array<number> = [];

        for (let j = 1; j <= i; j++) {
            console.log(j, arr[j]);
            
            if (arr[j-1] != j) {
                missingArray.push(j);
            }
        }
        
        return missingArray;
    }

    swap(arr: Array<number>, first: number, second: number) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp; 
     }
}

console.log(new FindAllNumber().findAllNumbersDisapearedInArray([4,3,2,7,8,2,3,1]));
// new FindAllNumber().findAllNumbersDisapearedInArray([4,3,2,7,8,2,3,1])