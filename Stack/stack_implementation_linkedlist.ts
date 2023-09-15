class NodeClass {
    public value: number | string;
    public next: NodeClass | null;
    constructor(value: number | string) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private top: NodeClass | null;
    private length: number;
    constructor() {
        this.top = null;
        this.length = 0;
    }
    peek () {
        return this.top?.value || null;
    }

    push (value: number | string) {
        const node = new NodeClass(value);
        if (this.top == null) {
            this.top = node;
        } else {
            const current = this.top;
            this.top = node;
            this.top.next = current; 
        }
        this.length++;
        return this;
    }

    pop () {
        const curr = this.top;
        if (!curr) return null;

        if (this.top) {
            this.top = this.top?.next || null;
        }
        this.length --;
        return curr.value;
    } 

    isEmpty() {
        if (this.top == null) return true;
        return false;
    }
}

const stack = new Stack();
console.log(stack.peek());
console.log(stack.isEmpty());

stack.push('google');
stack.push('udemy');
stack.push('discord');

console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.isEmpty());