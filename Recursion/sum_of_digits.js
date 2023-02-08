function sumOfDigits(n){
    if(n == 0) return 0;
    return (n%10) + sumOfDigits(parseInt(n/10)) ;
}

function multipy(n){
    if(n%10 == n){
        return n;
    }
    return (n%10) * multipy(parseInt(n/10));
}

console.log(sumOfDigits(31421));

console.log(multipy(505));