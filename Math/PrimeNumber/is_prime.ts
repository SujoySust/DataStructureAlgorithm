/**
 * Find the number is prime or not
 */
function isPrime(n: number): boolean {
    for (let i = 2; i * i <= n; i++) {
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}

function isPrimeWithWhile(n: number): boolean {
    let c = 2;
    while (c * c <= n) {
        if (n % c == 0) {
            return false;
        }
        c++;
    }
    return true;
}

console.log(isPrime(18));
console.log(isPrimeWithWhile(17));