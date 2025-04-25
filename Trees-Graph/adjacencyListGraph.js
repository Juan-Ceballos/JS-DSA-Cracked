class Graph {
    constructor(nodes) {
        this.nodes = nodes
    }
}

class Node {
    constructor(name, children = null, visited = false, adjacent = null, marked = null) {
        this.name = name
        this.children = children
        this.adjacent = adjacent
    }
}

function visit(node) {
    console.log(node.num)
}


// code of pseudo fix and create queue, and node instances
function depthFirstTraversal(root) {
    if (root === null) {
        return
    }
    visit(root)
    root.visited = true
    for (let child of root.adjacent) {
        if (child.visited == false) {
            depthFirstTraversal(child)
        }
    }
}

function breadthFirstTraversal(root) {
    let queue = new Queue()
    root.marked = true
    queue.enqueu(root)

    while (!queue.isEmpty()) {
        let r = queue.dequeue()
        visit(r)
        for (let n in r.adjacent) {
            if (n.marked === false) {
                n.marked = true 
                queue.enqueue(n)
            }
        }
    }
}
