function findUnionSolution1(arr1: number[], arr2: number[]): number[] {
  const mySet: Set<number> = new Set();
  const union: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    mySet.add(arr1[i]);
  } 
  
  for (let i = 0; i < arr2.length; i++) {
    mySet.add(arr2[i]);
  }

  for (let value of mySet) {
    union.push(value);
  }
  return union;
}

function findUnionTwoPointer(arr1: number[], arr2: number[]): number[] {
  const union: number[] = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (union.length == 0 || union[union.length - 1] != arr1[i]) {
        union.push(arr1[i])
      }
      i++;
    } else {
      if (union.length == 0 || union[union.length - 1] != arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  while(i < n1) {
    if (union.length == 0 || union[union.length - 1] != arr1[i]) {
      union.push(arr1[i])
    }
    i++;
  }
  
  while(j < n2) {
    if (union.length == 0 || union[union.length - 1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
}

{{ 
    const result = findUnionSolution1([1,2,3,4,5], [2,3,4,4,5,5,5,5,5,6]); 
    const result2 = findUnionTwoPointer([1,2,3,4,5], [2,3,4,4,5,5,5,5,5,6]); 
    result
    result2
}}