function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {

    arr2.sort((a,b)=> a-b);
    let count = 0;
    for (let i =0; i< arr1.length; i++) {
        let is_valid = true;
        let start = 0;
        let end = arr2.length - 1;
        while (start <= end) {
            const mid = start + Math.floor((end-start)/2);
            if (Math.abs(arr2[mid] - arr1[i]) <= d) {
                is_valid = false;
                break;
            } else if (arr2[mid] < arr1[i]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        if (is_valid) {
            count ++;
        }
    }

    return count;
};

console.log(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6));
