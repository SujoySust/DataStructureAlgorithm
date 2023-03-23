/**
 * Find gcd by Euclid's Algorithm
 * gcd (a,b) = gcd(reminder(b,a),a)
 */
function findGcd(a: number, b: number): number {
   if (a == 0) return b;
   return findGcd(b%a, a);
}

console.log(findGcd(4, 9));


/**
 * Formula: a * b / gcd(a,b)
 */
function findLcm (a: number, b: number) {
   return a * b / findGcd(a,b);
}

console.log(findLcm(3,5));
