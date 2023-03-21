/**
 * Factors of a number
 * All number that divisible is called factor of number
 */

function factorOfNumber(n: number) {
    for (let i = 1; i <=n; i++) {
        if (n %i == 0 ) {
            console.log(i+' ');
        }
    }
}

factorOfNumber(10);