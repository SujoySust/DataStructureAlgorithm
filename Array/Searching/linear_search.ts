function linearSearch(arr: number[], value: number): number {
    for (let i=0; i< arr.length; i++) {
        if(arr[i] == value) return i;
    }
    return -1;
}

const search_element = [3,6,4,7,9,2,1];

console.log(linearSearch(search_element, 4));