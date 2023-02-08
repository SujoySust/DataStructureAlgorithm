function recursion(n){
    console.log(n);
    if(n === 5) return;
    recursion(n+1);
}

recursion(1);