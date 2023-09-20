/**
 * Bubble sort
 * Best: O(n)
 * Avg: O(n^2)
 * Worst: O(n^2)
 */

function bubbleSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            flag = true;
        }

        if (!flag) break;
    }
    return arr;
}

console.log(bubbleSort([8,7,6,5,4,3,2,1]));