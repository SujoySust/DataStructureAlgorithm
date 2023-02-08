function binarySearh(arr,key,start = 0,end=arr.length-1){

    if(start > end) return -1;


    let middle =  parseInt(start + (end-start)/2);

    if(arr[middle] == key){
        return middle;
    }

    if(key < arr[middle]){
        return binarySearh(arr,key,start,middle-1);
    }else{
        return binarySearh(arr,key,middle+1,end);
    }

}

const arr = [1,2,3,4,5,6];

console.log(binarySearh(ar));