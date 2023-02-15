function searchInRotatedArray(arr: Array<number>, target: number) {
    const pivot = findPivot(arr);
    const find_first = binarySeach(arr, target, 0, pivot);
    if (find_first < 0) {
        const find_second = binarySeach(arr, target, pivot+1, arr.length -1);
        if (find_second < 0) {
            return - 1;
        }
        return find_second;
    }
    return find_first;
}

function findPivot(arr: Array<number>): number {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = start + Math.floor((end - start)/2);
        if (mid < end && arr[mid] > arr[mid+1]) {
            return mid
        }
        if (mid > start && arr[mid] < arr[mid-1]) {
            return mid -1;
        }
        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return 0;
}

function binarySeach(arr:Array<number>, target: number, start: number, end: number): number {
    while (start <= end) {
        const mid = start + Math.floor((end - start)/2);
        if(arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

console.log( searchInRotatedArray([1],1));
