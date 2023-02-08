function subSetArray(arr: Array<number>) : Array<Array<number>>{
    let outer: Array<Array<number>> = [];
    for(let num in arr){
        let n = outer.length;
        for(let i = 0; i < n; i++){
            console.log
            let internal : Array<number> = outer[i];
            internal.push(arr[num]);
            outer.push(internal);
        }

    }
    return outer;
}

console.log(subSetArray([1,2,3]));