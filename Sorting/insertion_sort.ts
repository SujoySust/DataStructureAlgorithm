/**
 * Best: O(n)
 * Worst: O(n^2)
 * Avg: O(n^2)
 */
function insertionSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));