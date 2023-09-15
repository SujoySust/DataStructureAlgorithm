class QueueByStack {
    private stack1: (number | string) [];
    private stack2: (number | string) [];
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value: string | number) {
        while(this.stack1.length != 0) {
            const item = this.stack1.pop();
            if (item) {
                this.stack2.push(item);
            }
        }

        this.stack1.push(value);

        while(this.stack2.length != 0) {
            const item = this.stack2.pop();
            if (item) {
                this.stack1.push(item);
            }
        }
    }

    dequeue(): number | string | undefined {
        if(this.stack1.length == 0) return -1;
        return this.stack1.pop()
    }
}

let q = new QueueByStack();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
