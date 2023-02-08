function binarySearchCircular(arr, key, start = 0, end = arr.length - 1 ){
    if(start > end ) return - 1;

    let mid =  parseInt(start + (end-start)/2);
    if(arr[mid] == key) return mid;

    if(arr[start] <= arr[mid]){
        if(key >= arr[start] && key <= arr[mid]){
            return binarySearchCircular(arr,key,start,mid-1);
        }else{
            return binarySearchCircular(arr,key,mid+1,end);
        }
    }

    if(key >= arr[mid] && key <= arr[end]){
        return binarySearchCircular(arr,key,mid+1,end);
    }

    return binarySearchCircular(arr,key,start,mid-1);

}

console.log(binarySearchCircular([6,7,8,9,1,2,3,4],2));