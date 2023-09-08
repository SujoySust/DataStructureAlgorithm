 function mergeSortedArray(array1: number[], array2: number[]): number[] {
    const mergedArray: number[] = [];
    
    // check input
    if (array1.length == 0 && array2.length == 0) return [];
    if (array2.length  == 0) return array1;
    if (array1.length  == 0) return array2;

    let i = 0;
    let j = 0;

    while(array1[i] || array2[j]) {
        if (!array2[j] || array1[i] <= array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    return mergedArray;
 } 

 console.log(mergeSortedArray([0,3,4,5,31], [4,6,30,32, 33, 35]));