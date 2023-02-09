/**
 * Floor of a number 
 * arr = [2,3,5,9,14,16,18]
 * target number = 15
 * find the greatest element of array is smaller or equal to target
 * celi(arr,14) = 14
 * celi(arr,15) = 14
 * celi(arr,4) = 3
 */

function findFloorNumberByBinarySearch(arr: Array<number>, target_number: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid =  start + Math.floor((end-start)/2);
        if (arr[mid] == target_number) {
            return arr[mid];
        } else if (arr[mid] <  target_number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return arr[end];
}
 
const floor_elements = [2,3,5,9,14,16,18];
console.log(findFloorNumberByBinarySearch(floor_elements, 1));


