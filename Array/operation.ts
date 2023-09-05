const strings = ['a', 'b', 'c', 'd'];
console.log(strings);

// one character takes 4 bytes
// 4 * 4 = 16 bytes of memory

//access
console.log(strings[1]) // Access O(1)

//push
strings.push('e'); // Push / Insert into last O(1)

//pop
strings.pop() // Pop or remove from first O(1)

//unshift
strings.unshift('x'); // Push into first  // O(n)

// splice
strings.splice(2, 0, 'alien'); // Insert into middle O(n)

console.log(strings);