/**
 * In javascript hash table is the object
 */

const user: any = {
    age: 54,
    name: 'John',
    magic: true,
    screem: function() {
        console.log('ahhhhh!');
    }
}

user.age // O(1)
user.spell = 'test'; //O(1)
user.screem(); // O(1)
 
// ============== Map & Set ===============//

/**
 * In javascript the two new keys are for hash map: Map & Set
 * The difference between map & object is map can use any type of key
 * Map maintain insertion order
 * 
 * Set is very similiar to map. Ther only different is set only store keys
 */

const a = new Map();
const b = new Set();