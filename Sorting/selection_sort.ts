/**
 * Complexity:
 * Best: O(n)
 * Avg: O(n^2)
 * Worst: O(n^2)
 * Space: O(1)
 */
function selectionSort(arr: number[]): number[] {
    for(let i=0; i<arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([8,7,6,5,4,3,2,1]));

