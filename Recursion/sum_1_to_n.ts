
// Parameter wise pattern
function sumNumbersByParam(i: number, sum: number): number {
    if (i < 1 ) return sum;
    return sumNumbersByParam(i - 1, sum + i);
}

// console.log(sumNumbersByParam(3, 0));

// Functional way

function sumNumberByFun(n: number) : number {
    if (n == 0 ) return 0;
    return n + sumNumberByFun(n-1);
}

console.log(sumNumberByFun(3));
