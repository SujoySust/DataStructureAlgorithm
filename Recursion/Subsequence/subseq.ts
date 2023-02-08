function subseq(up: string,p:string=""){
    if(up.length == 0){
        console.log(p);
        return;
    }

    const ch = up.charAt(0);

    subseq(up.substring(1),p+ch);
    subseq(up.substring(1),p);
}

function subseqList(up: string,p:string=""): Array<string>{
    if(up.length == 0){
        let list: Array<string> = [];
        list.push(p)
        return list;
    }

    const ch = up.charAt(0);

    let left : Array<string>  = subseqList(up.substring(1),p+ch);
    let right: Array<string> = subseqList(up.substring(1),p);
    
    left = [...left,...right]

    return left;
}

subseq("abc");
console.log(subseqList("abc"));
