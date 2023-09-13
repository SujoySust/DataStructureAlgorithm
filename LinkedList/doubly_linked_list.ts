class DoublyNodeClass {
    public value:number;
    public next: DoublyNodeClass | null;
    public prev: DoublyNodeClass | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    private head: DoublyNodeClass;
    private tail: DoublyNodeClass;
    private length: number;
    constructor(value: number) {
        this.head = new DoublyNodeClass(value);
        this.tail = this.head;
        this.length = 1;
    }

    printList(): number[] {
        const arr: number[] = [];
        let currentNode: DoublyNodeClass | null = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    append(value: number) {
        const newNode = new DoublyNodeClass(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    }

    prepend(value: number) {
        const newNode = new DoublyNodeClass(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
    }

    insert(index: number, value: number) {
        if (index < 0 || index > this.length) {
            return;
        }
        const newNode = new DoublyNodeClass(value);
        const parent = this.findValueByIndex(index - 1);
        const child = parent.next;
        newNode.next = child;
        newNode.prev = parent;
        parent.next = newNode;

        if (child) {
            child.prev = newNode;
        }
    }

    remove(index:number) {
        if(index < 0 || index > this.length) return;
        const parrent = this.findValueByIndex(index - 1);
        const current = parrent.next;
        const child = current?.next;
        if (child) {
            parrent.next = child;
            child.prev = parrent;
        } else {
            parrent.next = null;
        }
    }

    findValueByIndex(index: number) {
        let count = 0;
        let currentNode: DoublyNodeClass = this.head;
        if (index < 0) return currentNode;
        while (count != index && currentNode.next) {
            currentNode = currentNode.next;
            count ++;
        }
        return currentNode;
    }
}

const myDubLinkList = new DoublyLinkedList(10);
myDubLinkList.append(5);
myDubLinkList.append(15);
myDubLinkList.prepend(2);
myDubLinkList.insert(2, 22);
myDubLinkList.remove(3);
console.log(myDubLinkList.printList());