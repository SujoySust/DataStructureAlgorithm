/**
 * Find all the prime number
 */

function findAllPrimeNumber(n: number) {
    let primes: Array<boolean> = [];
    for (let i = 2; i * i < n ; i ++) {
        if (!primes[i]) {
            for (let j = i * 2; j <= n; j++) {
                primes[j] = true;
            }
        }
    }
}