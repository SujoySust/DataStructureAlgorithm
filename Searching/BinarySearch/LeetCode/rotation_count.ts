function rotationCount(arr: Array<number>) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = start + Math.floor((end - start)/2);
        if (mid < end && arr[mid] > arr[mid+1]) {
            return mid + 1;
        } else if (mid > start && arr[mid] < arr[mid - 1]){
            return mid;
        }
        if (arr[mid] <= arr[start]) {
            end = mid -1;
        } else {
            start =  mid + 1;
        }
    }
    return 0;
}

console.log(rotationCount([4,5,6,7,0,1,2]));
