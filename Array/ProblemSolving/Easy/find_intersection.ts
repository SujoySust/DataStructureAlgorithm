function findInterSectionSolution1(arr1: number[], arr2: number[]): number[] {
    const n1 = arr1.length;
    const n2 = arr2.length;
    const vis: number[] = [];
    const union: number[] = []

    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (arr2[j] > arr1[i]) break;
            if (arr1[i] == arr2[j] && !vis[j]) {
                union.push(arr1[i])
                vis[j] = 1;
                break;
            }
        }
    }
   
    return union;
}

function findInterSectionTwoPointer(arr1: number[], arr2: number[]): number[] {
    const n1 = arr1.length;
    const n2 = arr2.length;
    const union: number [] = [];
    let i = 0;
    let j = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            union.push(arr1[i]);
            i++;
            j++;
        }
    }
   
    return union;
}

{{
    const result = findInterSectionSolution1([1,2,2,3,3,4,5,6], [2,3,3,5,5,6,6,7]);
    const result2 = findInterSectionTwoPointer([1,2,2,3,3,4,5,6], [2,3,3,5,5,6,6,7]);
    result;
    result2;
}}