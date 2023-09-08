/**
 * Find common element in three sorted array using three pointer
 * Time complexity: O(n1+n2+n3)
 * Space: O(n)
 * */

function findCommonEleInThreeSortedArray(
    arr1: number[],
    arr2: number[],
    arr3: number[]
) {
    const n1 = arr1.length;
    const n2 = arr2.length;
    const n3 = arr3.length;

    const common: number[] = [];

    let i = 0, j =0, k = 0;
    while (i < n1 && j < n2 && k < n3) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            common.push(arr1[i])
        }

        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++
        } else {
            k++;
        }
    }
    return common;
}

const arr1 = [1,2,3,4,5,6];
const arr2 = [2,3,4,5,6,7];
const arr3 = [3,4,5,6,7,8];

const result = findCommonEleInThreeSortedArray(arr1, arr2, arr3);
console.log(result);