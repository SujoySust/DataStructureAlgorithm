class NodeClass {
    public value: number;
    public next: NodeClass | null;
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

    printList() {
        const arr: number[] = [];
        let currentNode: NodeClass | null = this.head;
        while(currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index: number, value: number) {
        // check parameter
        if (index >= this.length) {
            return this.append(value);
        }
        if (index < 0) {
            return this.prepend(value);
        }

        const newNode = new NodeClass(value);

        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        newNode.next = holdingPointer;
        leader.next = newNode;
        this.length ++;
        return this.printList();
    }
    
    remove(index: number){
        if (index < 0 || index > this.length) {
            return;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode?.next || null;
    }

    traverseToIndex(index: number): NodeClass{
        let count = 0;
        let currentNode = this.head;
        while(count != index && currentNode.next) {
            currentNode = currentNode.next ;
            count ++;
        } 
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(2);
myLinkedList.insert(2, 33);
myLinkedList.insert(3, 66);
myLinkedList.remove(3);
console.log(myLinkedList.printList());