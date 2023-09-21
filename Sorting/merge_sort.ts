class MergeSort {
    mergeSort(arr: number[]) : number[] {
        if (arr.length == 1) return arr;
    
        const length = arr.length;
        const middle = Math.floor(length/2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
    
        console.log('left:', left);
        console.log('righ:', right);
    
        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
    }

    private merge(left: number[], right: number[]) {
        const result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while(leftIndex < left.length && rightIndex < right.length) {
            if(left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex ++;
            } else {
                result.push(right[rightIndex]);
                rightIndex ++;
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}

const mergeSort = new MergeSort();
console.log(mergeSort.mergeSort([9,8,7,6,5,4,3,2,1]));