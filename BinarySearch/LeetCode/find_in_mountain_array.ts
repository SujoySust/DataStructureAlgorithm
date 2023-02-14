function findInMountainArray(arr:Array<number>, target: number): number {
    const peak = findPeakElement(arr);

    const search_in_first = search(arr, target, 0, peak);
    if (search_in_first !== -1) {
        return search_in_first;
    }
    const search_in_second = search(arr, target, peak+1, arr.length -1);
    console.log(search_in_second);
    
    if (search_in_second !== -1) {
        return search_in_second;
    }
    return -1;
}

function findPeakElement(arr:Array<number>): number {
    let start = 0;
    let end = arr.length -1;
    while (start < end) {
        const mid= start + Math.floor((end-start)/2);
        if (arr[mid] > arr[mid+1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

function search(arr: Array<number>, target: number, start: number, end: number): number {
    const is_asc = arr[end] - arr[start];
    console.log('is_asc', is_asc);
   
    
    
    while(start <= end) {
        const mid = start + Math.floor((end-start)/2);
        
        if (arr[mid] == target) {
            return mid;
        } 
        if (is_asc >= 0) {
            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            console.log('not');
            
            if (arr[mid] > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return - 1;
}

console.log(findInMountainArray([0,5,3,1], 1));
