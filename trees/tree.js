class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const newNode = new TreeNode(value);
        this.children.push(newNode);
        return newNode;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(value) {
        if (this.root !== null) {
            console.log("Root already exists!");
            return;
        }
        this.root = new TreeNode(value);
        return this.root;
    }
}

// Example usage:
const tree = new Tree();
const root = tree.addRoot(10);
const child1 = root.addChild(20);
const child2 = root.addChild(30);
const grandChild1 = child1.addChild(40);
const grandChild2 = child1.addChild(50);

console.log(tree);
