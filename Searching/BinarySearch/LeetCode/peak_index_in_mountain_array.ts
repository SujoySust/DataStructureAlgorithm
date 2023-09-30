function peakIndexInMountainArray(arr:Array<number>): number {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const mid = start + Math.floor((end-start)/2);
        if (arr[mid] > arr[mid+1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

console.log(peakIndexInMountainArray([1,2,3,4,5,4,3,2,1]));
