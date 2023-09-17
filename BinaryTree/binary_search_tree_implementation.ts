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
    public root: NodeClass | null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new NodeClass(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let currNode: NodeClass = this.root;
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

    traverse(node: NodeClass): NodeClass | null {
        const tree: NodeClass = {value: node.value, left: null, right: null};
        if (node.left == null) return null;
        tree.left = node.left;
        this.traverse(node.left);
        if(node.right == null) return null;
        tree.right = node.right;
        this.traverse(node.right);
        return tree;
    }

    find(value: number): NodeClass | null {
        let currentNode = this.root;
        if (!currentNode) return null;
        while(currentNode) {
            if (currentNode?.value && value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(currentNode?.value && value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return currentNode
            }
        }
        return null;
    }

    remove(value: number) {
        if(!this.root) return;
        let currentNode: NodeClass | null = this.root;
        let parentNode: NodeClass | null = currentNode;
        while(currentNode) {
            if (currentNode.value && value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left
            } else if(currentNode.value && value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                 if (currentNode.right == null) {
                    if(Number(currentNode.value) < Number(parentNode.value)) {
                        parentNode.left = currentNode.left;
                    } else if (Number(currentNode.value) > Number(parentNode.value)) {
                        parentNode.right = currentNode.left;
                    }
                 } else if (currentNode.right.left == null) {
                    currentNode.right.left = currentNode.left;
                    if (Number(currentNode.value) < Number(parentNode.value)) {
                        parentNode.left = currentNode.right;
                    } else if (Number(currentNode.value) > Number(parentNode.value)) {
                        parentNode.right = currentNode.right;
                    }
                 } else {
                    let leftmost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while(leftmost.left != null) {
                        leftMostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    leftMostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;  

                    if(Number(currentNode.value) < Number(parentNode.value)){
                        parentNode.left = leftmost;
                    } else if (Number(currentNode.value) > Number(parentNode.value)) {
                        parentNode.right = leftmost;
                    }
                 }
                 return;
            }
        }

    }

}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

if (tree.root) console.log(tree.traverse(tree.root));
tree.remove(15);
if (tree.root) console.log(tree.traverse(tree.root));