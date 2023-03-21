/**
 * Newton raphson method
 * Formula: root = x + (n/x)
 * Assign X to N
 * Ans will be found when error < 1
 * Update the value of X = root
 * Complexity: O (log(n)F(n))
 * F(n) = Cost of calculating f(x) / f^(x)
 */

function newtonSquareRoot(num: number) {
    let x = num;
    let root: number;
    while (true) {
        root = 0.5 * (x + ( num/x));
        if (Math.abs(root - x) < 1) {
            break;
        }
        x = root;
    }
    return root;
}

console.log(newtonSquareRoot(9));
