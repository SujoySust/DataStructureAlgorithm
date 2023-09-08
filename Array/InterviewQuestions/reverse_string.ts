function reverse(str: string): string {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input';
    }

    const backwards: string[] = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function reverse2(str: string): string {
     // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input';
    }

    return str.split('').reverse().join('');
}

const reverse3 = (str: string) => str.split('').reverse().join('');

const rev = reverse('I love you upo');
const rev2 = reverse('I love you upo');
const rev3 = reverse3('I love you upo');
console.log(rev);
console.log(rev2);
console.log(rev3);