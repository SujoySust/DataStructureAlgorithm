let arr = [];
function patternTriangle2(r,s = 0,e=0){
    if(s == r) return;
    if(e<=s){
        arr.push("*");
        patternTriangle2(r,s,e+1)
    }else{
        console.log(arr.join(''));
        arr = [];
        patternTriangle2(r,s+1,0);
    }
}

patternTriangle2(5);