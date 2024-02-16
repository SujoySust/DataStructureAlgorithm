function twoSumProblemSolution1(nums: number[], target: number): number[] {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function twoSumProblemSolution2(nums: number[], target: number) {
    const map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [-1,-1];
}

function twoSumProblemSolution3(nums: number[], target: number) {
    nums = nums.sort((a, b)=> a - b);
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const sum = nums[left] + nums[right];
        if (sum == target) return [left, right];
        else if (sum > target) right --;
        else left ++;
    }
    return [-1, -1];
}

{
  {
    const case1 = twoSumProblemSolution1([2, 6, 5, 8, 11], 14); case1;
    const case2 = twoSumProblemSolution2([2, 6, 5, 8, 11], 14); case2;
    const case3 = twoSumProblemSolution3([2, 6, 5, 8, 11], 14); case3;
  }
}
