function binarySearchImp(searchList, value) {
    let arrayPath = [];
    let start = 0;
    let end = searchList.length -1;
    while (start <= end) {
      const mid = start + Math.floor((end-start)/2);
      arrayPath.push(searchList[mid]);
      if (searchList[mid] == value) {
        return arrayPath;
      } else if (searchList[mid] > value) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return arrayPath;
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];
console.log(binarySearchImp(testArray,1));