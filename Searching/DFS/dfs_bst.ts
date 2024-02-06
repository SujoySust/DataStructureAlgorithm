class DfsNodeClass{
    public value: number;
    public left: DfsNodeClass | null;
    public right: DfsNodeClass | null;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DfsInBST {
    public root: DfsNodeClass | null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new DfsNodeClass(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let currNode: DfsNodeClass = this.root;
        while (true) {
            if (currNode.value && value <= currNode.value) {
                // Left
                if(!currNode.left) {
                    currNode.left = newNode;
                    return this;
                }
                currNode = currNode.left;
            } else {
                // Right
                if (!currNode.right) {
                    currNode.right = newNode;
                    return this;
                }
                currNode = currNode.right;
            }
        }
    }

    dfsInOrder(node: DfsNodeClass, list: number[]): number[] {

        if (node.left) {
            this.dfsInOrder(node.left, list);
        }
        list.push(node.value);

        if (node.right) {
            this.dfsInOrder(node.right, list);
        }
        return list;
    }

    dfsPreOrder(node: DfsNodeClass, list: number[]): number [] {
        list.push(node.value);

        if(node.left) {
            this.dfsPreOrder(node.left, list);
        }

        if (node.right) {
            this.dfsPreOrder(node.right, list);
        }

        return list;
    }

    dfsPostOrder(node: DfsNodeClass, list: number[]): number[] {
        if(node.left) {
            this.dfsPostOrder(node.left, list);
        }
        if (node.right) {
            this.dfsPostOrder(node.right, list);
        }
        list.push(node.value);
        return list;
    }
}

const dfsTree = new DfsInBST();
dfsTree.insert(9);
dfsTree.insert(4);
dfsTree.insert(20);
dfsTree.insert(170);
dfsTree.insert(15);
dfsTree.insert(1);
dfsTree.insert(6);

if (dfsTree.root) {
    console.log(dfsTree.dfsInOrder(dfsTree.root, []));
    console.log(dfsTree.dfsPreOrder(dfsTree.root, []));
    console.log(dfsTree.dfsPostOrder(dfsTree.root, []));
}
    
