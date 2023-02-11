/**
 * Find Smallest Letter Greater Than Target

 * You are given an array of characters letters that is sorted in non-decreasing order,
 * and a character target. There are at least two different characters in letters.
 
 * Return the smallest character in letters that is lexicographically greater than target. 
    If such a character does not exist, return the first character in letters.

    Input: letters = ["c","f","j"], target = "a"
    Output: "c"
    Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'
 */

function findSmallestLetterGreaterThanTarget(letters: string[], target:string): string {
   let start = 0;
   let end = letters.length - 1;
   while(start <= end) {
      const mid = start + Math.floor((end-start)/2);
      if (target  < letters[mid]) {
         end = mid - 1;
      } else {
         start = mid + 1;
      }
   }
   return letters[start%letters.length];
}

const letters = ["c","f","j"];
const target = "c";

console.log(findSmallestLetterGreaterThanTarget(letters, target));
