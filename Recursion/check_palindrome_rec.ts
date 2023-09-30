class PalindromeRec {
    checkPalindrome(str: string, i = 0): boolean {
        if (i > Math.floor(str.length / 2)) return true;
        if(str.charAt(i) != str.charAt(str.length - i -1)) return false;
        return this.checkPalindrome(str, i + 1);
    }
}

const palindromeRec = new PalindromeRec();
const result = palindromeRec.checkPalindrome("MADAM");

console.log(result);