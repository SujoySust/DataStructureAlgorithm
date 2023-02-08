function countZeros(number,count=0){
    if(number == 0){
        return count;
    }
    if(number%10 == 0) count++
    return countZeros(parseInt(number/10),count);
}

console.log(countZeros(102030));