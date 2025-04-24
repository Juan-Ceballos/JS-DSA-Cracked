// Node with Children
class Node {
    constructor(num, children = null) {
        this.num = num
        this.children = children
    }
}

let node1 = new Node(8)
let node2 = new Node(4)
let node3 = new Node(10)


node1.children = [node2, node3]
console.log(node1.children[0].num)


// Traversal on Binary Tree
class BinaryNode {
    constructor(num, leftChild = null, rightChild = null) {
        this.num = num 
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}

function visit(node) {
    console.log(node.num)
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.leftChild)
        visit(node)
        inOrderTraversal(node.rightChild)
    }
}

function preOrderTraversal(node) {
    if (node !== null) {
        visit(node)
        preOrderTraversal(node.left)
        preOrderTraversal(node.right)
    }
}

function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left)
        postOrderTraversal(node.right)
        visit(node)
    }
}

let bNode1 = new BinaryNode(8)
let bNode2 = new BinaryNode(4) 
let bNode3 = new BinaryNode(10)

bNode1.leftChild = bNode2
bNode1.rightChild = bNode3

inOrderTraversal(bNode1)