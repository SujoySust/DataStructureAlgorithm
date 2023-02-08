function linearSearch(arr,key,index=0){
    if(index == arr.length) {
        return false;
    }

    if(arr[index] == key){
        return true;
    }else{
       return linearSearch(arr,key,index+1); 
    } 
}

function findAllIndex(arr,key,index=0,index_arr=[]){
    if(index == arr.length){
        return index_arr;
    }

    if(arr[index] == key){
        index_arr.push(index);
    }
    
    return findAllIndex(arr,key,index+1,index_arr);

}

function findAllIndex2(arr,key,index=0){
    const list = [];
    if(index == arr.length){
        return list;
    }

    if(arr[index] == key){
        list.push(index);
    }
    
    const prelist = findAllIndex(arr,key,index+1);
    list.push(...prelist);
    return list;
}

console.log(linearSearch([1,2,3,4,5],2));


console.log(findAllIndex([1,2,2,2,3,4,5],2));

console.log(findAllIndex2([1,2,2,2,3,4,5],2));