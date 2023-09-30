function binarySearch(arr, target) {
  var start = 0;
  var end = Number(arr.length) - 1;
  const is_asc = arr[start] - arr[end];
  while (start <= end) {
    var mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (is_asc) {
      if (arr[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
var arr = [2, 4, 6, 8, 10];
var target = 6;
console.log(binarySearch(arr, target));
