// Searching in unsorted array O(n)

function searchUnsortedArray(arr: number[], value: number) {
    for (let i=0; i< arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}

function searchSortedArray(arr: number[], value: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == value) return mid;
        else if (arr[mid] > value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


const arr_new = [1,2,3,4,5,6] ;

console.log(searchUnsortedArray(arr_new, 3));
console.log(searchSortedArray(arr_new, 3));