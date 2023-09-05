/**
 * In javscript or python there never allocate the size of array
 * All arrays of js is dynamic array
 */


//======================== Premetive vs Reference type =============================//

// premetive types: number, boolean, string, undefine

// reference type: object, array
var object1  = { value: 10 };
var object2  = object1;

var object3 = {value: 10};

console.log(object1 == object2); // return true
console.log(object1 == object3); // return false

object1.value = 15;
console.log(object2.value) // 15

console.log(object3.value) // 15

/**
 *  Here object1 and object2 reference the same object.
    If value of object1 is chaged then the value of object 2 will be changed or vice verse
*/

// ========================== Instantiation ====================== //

class Player {
    public readonly name: string;
    public readonly type: string; 
    constructor(name: string, type: string) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}. I am a ${this.type} `)
    }
}

class Wizard extends Player {
    constructor(name: string, type: string) {
        super(name, type);
    }
    play() {
        console.log(`WEEEEEE I am a ${this.type}`);    
    }
}

const wizard1 =  new Wizard("Shelly", "Healer");
const wizard2 =  new Wizard("Shawn", "Dark magic");