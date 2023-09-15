class NodeClass {
    public value: number | string;
    public next: NodeClass | null;
    constructor (value: number | string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    private first: NodeClass | null;
    private last: NodeClass | null;
    private length: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first?.value || null;
    }

    enqueue(value: number | string) {
        const newNode = new NodeClass(value);
        if (!this.first) {  
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next = newNode;
                this.last = newNode;
            }
        }
        this.length ++;
        return this;
    }

    dequeue() {
        const first = this.first;
        if (!first) return null;
        this.first = this.first?.next || null;
        this.length --;
        return first?.value || null;
    }

    isEmpty() {
        if (this.length == 0) return true;
        return false;
    }
}

const queue = new Queue();
console.log(queue.enqueue("Bangladesh"));
console.log(queue.enqueue("India"));
console.log(queue.enqueue("Usa"));
console.log(queue.enqueue("Usa2"));
console.log(queue.enqueue("Usa3"));

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
