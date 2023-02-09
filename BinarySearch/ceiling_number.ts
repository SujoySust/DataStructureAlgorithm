/**
 * Ceiling of a number 
 * arr = [2,3,5,9,14,16,18]
 * target number = 15
 * find the smallest element of array is greater or equal to target
 * celi(arr,14) = 14
 * celi(arr,15) = 16
 * celi(arr,4) = 5
 */

function ceilingNumberByBinarySearch (arr: Array<number>, target_number: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end-start)/2);
        if (arr[mid] == target_number) {
            return arr[mid];
        } else if (arr[mid] < target_number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return arr[start];
}
const elements = [2,3,5,9,14,16,18];
console.log(ceilingNumberByBinarySearch(elements, 14));
