function binarySearchInSortedMatrix(matrix: Array<Array<number>>, target: number): Array<number> {
    let rows = matrix.length;
    let cols =  matrix[0].length;
    if (rows == 1) {
        return binarySeachInMatrix(matrix, 0, 0, cols - 1, target);
    }
    let rStart = 0;
    let rEnd = rows - 1;
    let cMid = Math.floor(cols /2);

    while (rStart < (rEnd-1)) {
        const mid = rStart + Math.floor((rEnd-rStart)/2);
        if (matrix[mid][cMid] == target) {
            return [mid, cMid];
        } else if (matrix[mid][cMid] < target) {
            rStart = mid;
        } else {
            rEnd = mid;
        }
    }
    if (matrix[rStart][cMid] == target) {
        return [rStart, cMid];
    } else if (matrix[rStart + 1][cMid] == target) {
        return [rStart+1, cMid];
    } else if (target <= matrix[rStart][cMid-1]) {
        return binarySeachInMatrix(matrix, rStart, 0, cMid -1, target);
    } else if (target >= matrix[rStart][cMid-1] && target <= matrix[rStart][cols - 1]) {
        return binarySeachInMatrix(matrix, rStart, cMid +1, cols -1, target);        
    } else if (target <= matrix[rStart + 1][cMid-1]) {
        return binarySeachInMatrix(matrix, rStart, cMid + 1, cols-1, target);
    } else if (target >= matrix[rStart + 1][cMid-1]) {
        return binarySeachInMatrix(matrix, rStart + 1, cMid + 1, cols - 1, target);
    }
    return [-1,-1];
}

function binarySeachInMatrix(
    matrix: Array<Array<number>>,
    row: number,
    cStart: number,
    cEnd: number,
    target: number
): Array<number> {
   while (cStart <= cEnd) {
    const mid = cStart + Math.floor((cEnd-cStart)/2);
    if (matrix[row][mid] == target){
        return [row, mid];
    } else if (matrix[row] [mid] < target) {
        cStart = mid + 1;
    } else {
        cEnd = mid - 1;
    }
   } 
   return [-1,-1];
}

console.log(binarySearchInSortedMatrix([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
], 9));
