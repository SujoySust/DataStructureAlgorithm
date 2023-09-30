class BFSNodeClass{
    public value: number | null;
    public left: BFSNodeClass | null;
    public right: BFSNodeClass | null;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BfsInBST {
    public root: BFSNodeClass | null;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new BFSNodeClass(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let currNode: BFSNodeClass = this.root;
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

    bfs(): number[] {
        const list: number[] = [];
        const queue: BFSNodeClass [] = [];
        const currNode = this.root;
        if (!currNode) return list;

        queue.push(currNode);

        while(queue.length > 0) {
            const curr = queue.shift();
            if(!curr || !curr.value) return list;
            list.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }

        return list;
    }

    bfsRec(queue: BFSNodeClass[], list: number[]): number [] {
        if (!queue.length) {
            return list;
        }

        const curr = queue.shift();
        if (!curr || !curr.value) {
            return list;
        }

        list.push(curr.value);
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }

        return this.bfsRec(queue, list);
    }
}

const bfsTree = new BfsInBST();
bfsTree.insert(9);
bfsTree.insert(4);
bfsTree.insert(20);
bfsTree.insert(170);
bfsTree.insert(15);
bfsTree.insert(1);

// console.log(bfsTree.bfs());
const curr = bfsTree.root;
const queue: BFSNodeClass[] = [];
const list: number[] = [];
if (curr && curr.value) {
    queue.push(curr);
}
console.log(bfsTree.bfsRec(queue, list));

