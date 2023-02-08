class Node{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

let root = null;
root = new Node(1);
root.left = Node(2);
root.right = Node(3);
root.left.left = Node(4);


