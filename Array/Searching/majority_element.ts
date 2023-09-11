class MajorityElement {
    binarySearch(arr: number[], value:number) {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            const mid = left + Math.floor((right-left)/2);
            if (arr[mid] == value) return mid;
            else if (arr[mid] > value) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    findMajority(): boolean {
        const arr = [1,2,3,4,4,4,4];
        const value = 4;
        const index = this.binarySearch(arr, value);
        if (index < 0) return false;
        const length = arr.length;
        const last_index = index +  Math.floor(length/2);
        if (last_index < length && arr[last_index] == value) return true;
        return false;
    }
}

const majority = new MajorityElement();
console.log(majority.findMajority());