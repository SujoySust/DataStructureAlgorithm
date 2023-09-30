function binarySearch (arr:Array<number>, target: number): number {
    let start = 0;
    let end = Number(arr.length);
    while (start <= end) {
        const mid = start + Math.floor((end - start)/2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            start = mid +1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}


const arr = [2,4,6,8,10];
const target = 6;

console.log(binarySearch(arr, target));
