function findFirstAndLastPosition (arr : Array<number>, target: number) {
    const ans = [-1,-1];
    const start = searchPosition(arr, target, true);
    const end = searchPosition(arr, target, false);
    ans[0] = start;
    ans[1] = end;
    return ans;
}   

function searchPosition(arr : Array<number>, target: number, find_start_index: boolean): number {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while( start <= end) {
        const mid = start + Math.floor((end-start)/2);
        if (arr[mid] == target) {
            ans = mid;
            if (find_start_index) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }
    return ans;
}

const to_serach_array = [5,7,7,7,7,8,8,10];

console.log(findFirstAndLastPosition(to_serach_array, 8));
