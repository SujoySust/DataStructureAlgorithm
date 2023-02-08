class Node{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

function preOrderTravarsal(node){
    if (node == null) return;
    console.log(node.key);
    preOrderTravarsal(node.left);
    preOrderTravarsal(node.right);
}

function inOrderTravarsal(node){
    if(node === null) return;
    inOrderTravarsal(node.left);
    console.log(node.key);
    inOrderTravarsal(node.right);
}


function postOrderTraversal(node){
    if(node === null) return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.key);
}


let root = null;

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder tranvarsal \n");
preOrderTravarsal(root);
console.log("\n");

console.log("Inorder tranvarsal \n");
inOrderTravarsal(root);
console.log("\n");

console.log("Postorder travarsal \n");
postOrderTraversal(root);
