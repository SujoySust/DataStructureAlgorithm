let arr = [];
function patternTriangle1(r,c=0){
    if(r==0) return;
    if(c<r){
        arr.push("*");
        patternTriangle1(r,c+1);
    }else{
        console.log(arr.join(''));
        arr = [];
        patternTriangle1(r-1,0)
    }
}

patternTriangle1(5);