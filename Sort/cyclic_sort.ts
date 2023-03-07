/**
 * Cyclic sort
 * When given number from range 1 to n use cyclic sort
 * After sorting index will be value - 1
 * if (index !== value - 1) swap
 * @param arr 
 * @returns 
 */

function cyclicSort(arr: Array<number>): Array<number> {
    let i =0;
    while (i < arr.length) {
        const correct = arr[i] - 1;
        if (arr[i] !== arr[correct]) {
            swapCyclick(arr, i, correct);
        } else {
            i ++;
        }

    }
    return arr;
}

function swapCyclick(arr: Array<number>, first: number, second: number) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp; 
 }

 console.log(cyclicSort([4,2,3,1,5]));
 