class Equilibrium {

    /** 
     * Naive approach using two loops. 
     * The outer loop iterates through all the elements
     * The inner loop finds out weather the current index picked by the outer loop is equilibrium index or not
     * Time: O(n^2)
     * Space: O(1)
     * */
    naiveApproach(arr: number[]): number {
        for (let i=0; i< arr.length; i++) {
            let leftSum = 0;
            let rightSum = 0;

            // find left sum
            for (let j = 0; j <i; j++) {
                leftSum += arr[j];
            }

            // find right sum
            for (let j=i+1; j< arr.length; j++) {
                rightSum += arr[j];
            }

            if (leftSum == rightSum) {
                return i;
            }
        }
        return -1;
    }
}

const equilibrium = new Equilibrium();
console.log(equilibrium.naiveApproach([1,2,3]));