class NodeClass {
    public value: number;
    public next: any;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: NodeClass;
    private tail: NodeClass;
    private length: number;
    constructor(value: number){
        this.head = new NodeClass(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number) {
        const newNode = new NodeClass(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }

    prepend(value: number) {
        const newNode = new NodeClass(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(2);
console.log(myLinkedList);