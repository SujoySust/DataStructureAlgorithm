function fiboRecursion(n: number): number {
    if(n < 2) return n;
    return fiboRecursion(n-2) + fiboRecursion(n-1);
}

function fiboIterative(n: number): number {
    let arr: number[] = [0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

 console.log(fiboRecursion(6));

console.log(fiboIterative(6));