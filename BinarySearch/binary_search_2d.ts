function binarySearch2D(arr: Array<Array<number>>, target: number): Array<number> {
    let row = 0;
    let col = arr.length -1;

    while (row < arr.length && col >= 0) {
        if (arr[row][col] == target) {
            return [row, col];
        } else if (arr[row][col] < target) {
            row ++
        } else {
            col --;
        }
    }
    return [-1,-1];
}

console.log(binarySearch2D([
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [28, 29, 37, 49],
    [33, 34, 38, 50],
],37));
