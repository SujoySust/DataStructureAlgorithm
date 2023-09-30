class ReverseRecursion {

    reverse(arr: number[], l = 0, r = arr.length - 1) {
        if ( l >= r ) return;
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        this.reverse(arr, l + 1, r-1);
    }

    reverse2(arr: number[], i = 0) {
        if (i >= Math.floor(arr.length / 2) ) return;
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
        this.reverse2(arr, i+1);
    }
}

const revRec = new ReverseRecursion();
const arr = [1, 3, 2, 5, 4, 8, 6];
revRec.reverse(arr)
console.log(arr);

revRec.reverse2(arr)
console.log(arr);