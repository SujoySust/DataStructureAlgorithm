/**
 * Factors of a number
 * All number that divisible is called factor of number
 * 
 */

// Solution O(n))
function factorOfNumber(n: number) {
    for (let i = 1; i <=n; i++) {
        if (n %i == 0 ) {
            console.log(i+' ');
        }
    }
}

// Solution O(log(sqrt(n)))
function factorOfNumber2(n:number) {
    for (let i=1; i <=Math.sqrt(n); i++) {
        if (n%i == 0) {
            if (n%i == i) {
                console.log(i);
            } else {
                console.log(n/i); 
            }
        }
    }
}


// Solution O(log(sqrt(n)))
function factorOfNumber3(n:number) {
    let arr: Array<number> = [];
    for (let i=1; i <=Math.sqrt(n); i++) {
        if (n%i == 0) {
            if (n%i == i) {
                console.log(i);
            } else {
                arr.push(n/i);
            }
        }
    }

    for (let i=arr.length - 1;i>=0;i--) {
        console.log(i);
    }
}


factorOfNumber(10);