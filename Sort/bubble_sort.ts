  /**
   * Bubble sort algorithm
   * With the pass through the array the largest element come to the end
   * Time Complexity: Best O(n2) | Worst O(n2)
   * Space Complexity: O(n)  
   * @param arr 
   * @returns 
   */
  
  function bubbleSort(arr: Array<number>): Array<number> {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let flag = false;
        for (let j=0; j < length - i; j++ ){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
  }

  console.log(bubbleSort([1,2,3,4,5]));
  