/**
 * Missing number
 * https://leetcode.com/problems/missing-number/
 * @param arr 
 * @returns 
 */
function missingNumber(arr: Array<number>): number {
  let i = 0;
  while (i <= arr.length) {
    const correct = arr[i];
    if (arr[i] !== arr[correct]) {
      swapMissing(arr, i, correct);
    } else {
      i++;
    }
  }

  for (let j = 0; j <= i; j++) {
    if (arr[j] !== j) {
      return i;
    }
  }
  return -1;
}

function swapMissing(arr: Array<number>, first: number, second: number) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

console.log(missingNumber([0,1]));
