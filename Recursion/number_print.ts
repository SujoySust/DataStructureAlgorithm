// Print 1 to n
function printNumber(n: number){
    if(n == 0) return;
    printNumber(n-1);
    console.log(n);
}

// Print n to 1
function printNumberRev(n: number){
    if(n == 0) return;
    console.log(n);
    printNumberRev(n-1);
}


printNumber(5);
printNumberRev(10);