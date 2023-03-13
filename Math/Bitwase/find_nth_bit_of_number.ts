function findNthBitOfNumber(num: number, n: number) {
    return n && (1 << n-1);
}

console.log(findNthBitOfNumber(3,2));
