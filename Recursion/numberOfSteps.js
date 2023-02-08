function numberOfSteps(number,count=0){
    if(number == 0) return count;
    if(number % 2 == 0){
        return numberOfSteps(parseInt(number/2),count + 1);
    }
    return numberOfSteps(number-1,count+1);
}

console.log(numberOfSteps(1432));