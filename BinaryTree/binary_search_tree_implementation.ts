class NodeClass{
    public value: number | null;
    public left: NodeClass | null;
    public right: NodeClass | null;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    private root: NodeClass | null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new NodeClass(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
    }

    find(value: number) {

    }

}




