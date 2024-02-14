function movesZeroBruteForce(nums: number[]): void {
    let count = 0;
    let i = 0;
    let len = nums.length;
    while (i < len) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            count ++;
            len --;
        } else {
            i++
        }
    }

    for (let i = 0; i < count; i ++) {
        nums.push(0);
    }
}

function movesZeroSolution1(nums: number[]): number[] {
    const temp: number[] = [];
    const len = nums.length;
    for (let i = 0; i< len; i++) {
        if (nums[i] != 0) {
            temp.push(nums[i])
        }
    }
    const nz = temp.length;
    for (let i = 0; i < temp.length; i++) {
       nums[i] = temp[i];
    }

    for (let i = nz; i < len; i++) {
        nums[i] = 0;
    }
    return nums;
} 

function movesZeroSolution2(nums: number[]): number[] {
    let j = - 1;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }
    }

    if (j == -1) return nums;

    for (let i = j + 1; i < len; i++) {
        if (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }

    return nums;
}

{{
    const result1 = movesZeroSolution1([0,1,0,3,12])
    const result2 = movesZeroSolution1([0,1,0])

    const result3 = movesZeroSolution2([0,1,0,3,12])
    const result4 = movesZeroSolution2([0,1,0])

    result1
    result2

    result3
    result4
}}