// Inserting Elements in an Array at the end
function insertElementEndOfArray(arr: number[], value: number) {
    const index = arr.length;
    arr[index] = value;
}

// Inserting Elements in an  Array at any Position

function insertElementInArrayAtAnyPosition(arr: number[], value: number, pos: number) {
    const len = arr.length;
    if (pos > len || pos < 0) {
        throw new Error("Invalid position");
    }
    for (let i = len - 1; i >= pos; i-- ) {
        arr[i+1] = arr[i];
    }
    arr[pos] = value;
}

const arr = [12, 16, 20, 40, 50, 70];

insertElementEndOfArray(arr , 16);
console.log(arr);

insertElementInArrayAtAnyPosition(arr , 20, 4);
console.log(arr);
