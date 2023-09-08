function binarySearch(arr: number[], value: number): number {
    let left = 0;
    let right = arr.length -1;
    while (left <= right) {
        const mid = left + Math.floor((right-left)/2);
        if(arr[mid] == value) return mid;
        else if (arr[mid] > value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1;
}

function binarySearchRecursion(arr: number[], value: number, left: number = 0, right: number = arr.length - 1): number {
    if (left > right) return -1;
    const mid = left + Math.floor((right - left)/2);
    if(arr[mid] == value) return mid;
    else if (arr[mid] > value) {
        return binarySearchRecursion(arr, value, mid + 1, right);
    } else {
        return binarySearchRecursion(arr, value, mid, right - 1);
    }
}

const bs_ele = [1, 2, 3, 4, 5, 6, 7 , 8];

console.log(binarySearch(bs_ele, 5));
console.log(binarySearchRecursion(bs_ele, 5));