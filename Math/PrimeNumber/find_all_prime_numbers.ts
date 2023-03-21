/**
 * Find all the prime number
 * Find the multiple of a number till n 
 * Time Complexity: n/2+n/3+n/4+.....
 * => n (1/2+1/3+1/4+.....);
 * => n * log(log(n))
 */

function findAllPrimeNumber(n: number) {
    let primes: Array<boolean> = [];
    for (let i = 2; i * i < n ; i ++) {
        if (!primes[i]) {
            for (let j = i * 2; j <= n; j+=i) {
                primes[j] = true;
            }
        }
    }

    for (let i=2; i<=n; i++) {
        if (!primes[i]) {
            console.log(i + ' ');
        }
    }
}

findAllPrimeNumber(50);