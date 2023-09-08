// Delete element in an array when it its unsorted

function findElement(arr: number[], value: number): number {
    for (let i=0; i< arr.length; i++) {
        if(arr[i] == value) return i;
    }
    return -1;
}

function deleteElement(arr: number[], pos: number) {
    const length = arr.length;
    for (let i= pos; i <= length; i++) {
        arr[i] = arr[i+1];
    }
}

function binarySearchFind(arr: number[], value:number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == value) return mid;
        else if (arr[mid] > value) {
            left = mid+1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function deleteElementFromUnsortedArray(arr: number[], value: number) {
    const pos = findElement(arr, value);
    if (pos < 0) throw new Error('Element not found');
    arr.splice(pos, 1);
    const length = arr.length;
    // deleteElement(arr, pos);
    return length - 1
}

function deleteElementFromSortedArray(arr: number[], value: number) {
    const pos = binarySearch(arr, value);
    if (pos < 0) throw new Error('Element not found');
    arr.splice(pos, 1);
    // deleteElement(arr, pos);
    return arr.length - 1;
}

const arr = [10, 8, 11, 7, 6, 20];
deleteElementFromUnsortedArray(arr, 6);
console.log(arr);

deleteElementFromSortedArray(arr, 7);
console.log(arr);