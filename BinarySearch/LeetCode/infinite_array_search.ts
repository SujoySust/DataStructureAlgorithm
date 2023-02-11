function infiniteArraySearch (arr: Array<number>, target: number): number {
    let start = 0;
    let end =  1;

    while (target > arr[end]) {
        const newStart = end + 1;
        end = end + (end - start +  1) * 2;  
        start = newStart;
    }

    return seachInfiniteArray(arr, target, start, end);
}

function seachInfiniteArray(arr: Array<number>, target: number, start: number, end: number): number {
    while (start <= end) {
        const mid = start + Math.floor((end-start)/2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid-1;
        }
    }
    return - 1;
}

const infinite_array = [1,2,5,7,8,9,10,15,17,19];

console.log(infiniteArraySearch(infinite_array, 10));
