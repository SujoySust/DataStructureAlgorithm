/**
 * Insertion sort algorith
 * Sorting array partially
 * For every index put that index element at the correct index of the list
 * Complexity: Worst O(n2) | Best O(n)
 * Stable: Yes
 * Used for smaller value of n where array is partially sorted
 */

function insertionSort (arr: Array<number>): Array<number> {
     for (let i=0; i< arr.length - 1; i++) {
        for (let j = i+ 1; j > 0; j--) {
            if (arr[j]  < arr [j-1]){
                swapInsertion(arr, j, j-1);
            } else {
                break;
            }
        }
     }
     return arr;
}

function swapInsertion(arr: Array<number>, first: number, second: number) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp; 
 }

 console.log(insertionSort([5,4,3,2,1]));
 