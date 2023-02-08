class Node{
    constructor(val){
        this.key = val;
        this.left = this.right = null;
    }
}

function inorderTravarsalIterative(node){
    let s = [];
    let inorder = [];
    let curr = node;

    while(curr != null || s.length > 0){
        while(curr != null){
            s.push(curr);
            curr = curr.left;
        }
        curr = s.pop();
        inorder.push(curr.key);
        curr = curr.right;
    }

    console.log(inorder.join(','));
}


function preOrderTravarsalIterative(node){
    let s = [];
    let preorder = [];
    let curr = node;
    while(curr != null || s.length > 0){
        while(curr != null){
            s.push(curr);
            preorder.push(curr.key);
            curr = curr.left;
        }
        curr = s.pop();
        curr = curr.right;
    }

    console.log(preorder.join(','));
}

function postOrderTraversalIterative(node){
    let s = [];
    let postorder = [];

    if(node == null) return;

    s.push(node);

    while(s.length > 0){
        const temp = s.pop();

        postorder.push(temp.key);

        if(temp.left != null){
            s.push(temp.left);
        }
        if(temp.right != null){
            s.push(temp.right);
        }
    }
    console.log(postorder.join(','));
}

let root = null;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inorderTravarsalIterative(root);

preOrderTravarsalIterative(root);

postOrderTraversalIterative(root);