function guessNumber(n: number): number {
    const pick = prompt();
    let start = 1;
    let end = n;
    while (start <= end) {
        const mid =  start + Math.floor((end - start)/2);
        if (Number(pick) == mid) {
            return guess(mid);
        } else if (Number(pick) < mid) {
            start = mid - 1;
        } else {
            end = mid + 1;
        }
    }
    return -  1;
};