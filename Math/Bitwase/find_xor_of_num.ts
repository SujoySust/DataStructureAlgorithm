/**
 * Find the XOR of num from 0 to a
 * 0 => 0
 * 0 XOR 1 = 1
 * 0 XOR 1 XOR 2 = 3
 * From the pattern we get the formula
 * if a % 4  == 0 then a
 * if a % 4 == 1 then 1
 * if a % 4 == 2 then a + 1
 * else 0
 * ...
 */

function findXorOfNumber(a: number, b: number): number {
    const ans = xor(b) ^ xor(a-1);
    console.log(ans);
    return ans;
}

function xor(a: number):number {
    if (a % 4 == 0){
        return a;
    }
    if( a % 4 == 1 ){
        return 1;
    }
    if (a % 4 == 2){
        return a + 1; 
    }
    return 0;
}

findXorOfNumber(3,9);