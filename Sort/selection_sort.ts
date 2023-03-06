/**
 * Selection sort algorithm
 * Find the max index and swap it to last index
 * Decrese the array length by 1 in each iteration
 * Complexity: Best: O(n2) | Worst: O(n2) 
 * Stable: No
 * Performs well on small list/array   
 * @param arr 
 * @returns 
 */

function selectionSort(arr: Array<number>): Array<number> {
    for (let i = 0; i < arr.length; i++) {
        const last = arr.length - i -1;
        const maxIndex = getMaxIndex(arr, 0, last);
        swap(arr, maxIndex, last);
    }
    return arr;
}

function getMaxIndex(arr: Array<number>, start: number, end: number) {
    let max = start;
    for (let i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}

export function swap(arr: Array<number>, first: number, second: number) {
   const temp = arr[first];
   arr[first] = arr[second];
   arr[second] = temp; 
}

console.log(selectionSort([3,1,5,4,2]));
