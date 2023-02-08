function reverseNumber(n) {
  const digits = parseInt(Math.log10(n)) + 1;
  return helper(n,digits);
}

function helper(n,digits){
  if(n%10 == n) return n;
  rem = n%10;
  return rem * Math.pow(10,digits-1)+ helper(parseInt(n/10),digits-1);
}

console.log(reverseNumber(parseInt(1432)));

function checkPalindrome(n){
  let rev = reverseNumber(n);
  if(n == rev) console.log('Palindrome..');
  else console.log('Not palindrome.');
}

checkPalindrome(12321);