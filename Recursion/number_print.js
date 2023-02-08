function printNumber(n){
    if(n == 0) return;
    console.log(n);
    printNumber(n-1);
}

function printNumberRev(n){
    if(n == 0) return;
    printNumberRev(n-1);
    console.log(n);
}

printNumber(5);
printNumberRev(10);