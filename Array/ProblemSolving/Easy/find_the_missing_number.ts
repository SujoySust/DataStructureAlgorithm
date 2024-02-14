function findTheMissingNumBruteForce(arr: number[], n: number): number {
    for (let i = 1; i <=n; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length; j ++) {
            if (arr[j] == i) {
                flag = 1;
                break;
            }
        }

        if (flag == 0) return i;
    }
    return - 1;
}

function findTheMissingNumberBetter(arr: number[], n: number): number {
    const hash: number[] = [];
    for (let i = 1; i <= n; i++) {
        hash[i] = 0;
    }

    for (let i = 0; i< arr.length; i++) {
        hash[arr[i]] = 1;
    }

    for (let i = 1; i <= n; i++) {
        if (hash[i] == 0) return i;
    }
    return -1;
} 

function findTheMissingNumberOptimal1(arr: number[], n: number): number {
    const sum = Math.floor((n * (n+1))/2);
    const arr_sum = arr.reduce((result, item)=> result + item, 0);
    return sum - arr_sum;
}

function findTheMissingNumberOptimal2(arr: number[]): number {
    const n = arr.length;
    let xor1 = 0;
    for (let i = 1; i <= n; i++) {
        xor1 = xor1 ^ i;
    }
    let xor2 = 0;

    for (let i = 0; i < arr.length; i++) {
        xor2 = xor2 ^ arr[i];
    }

    return xor1 ^ xor2;
}

{{
    const result = findTheMissingNumBruteForce([1, 2, 4], 4);
    const result2 = findTheMissingNumBruteForce([1, 2, 4, 3], 5);
    const result3 = findTheMissingNumberOptimal1([1, 2, 4, 3], 5);
    const result4 = findTheMissingNumberOptimal2([3,0,1]);
    result;
    result2;
    result3;
    result4;
}}