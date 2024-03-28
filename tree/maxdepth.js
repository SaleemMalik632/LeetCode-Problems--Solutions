class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    printtree(root) {
        if (!root) {
            return;
        }
        this.printtree(root.left);
        console.log(root.value);
        this.printtree(root.right);
    }
    depthoftreebinary(root) {
        let left = 0;
        let right = 0;
        let current = root;
        while (current) {
            left++
            current = current.left;
        }
        let current1 = root;
        while (current1) {
            right++
            current1 = current1.right;
        }
        if (left > right) {
            return left
        }
        return right;
    }
    depthOfTree(root) {
        if (!root) {
            return 0;
        }
        let leftDepth = this.depthOfTree(root.left);
        let rightDepth = this.depthOfTree(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }
    isValidBST(root, min = null, max = null) {
        if (!root) {
            return true;
        }
        if ((max != null && root >= max) || (min != null && root <= min)) {
            return false;
        }
        return this.isValidBST(root.left, root.value, min) && this.isValidBST(root.right, max, root.value);
    }
    atrativeisValidBST(root) {
        if (!root) {
            return null;
        }
        let stack = [];
        let prev = null;
        while (root || stack.length > 0) {
            while (root) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            console.log(root.value);
            if (prev != null && root.value <= prev.value) {
                return false;
            }
            prev = root;
            root = root.right;
        }
        return true;
    }
    kmaximumElement(root, k) {
        if (!root) {
            return null
        }
        let stack = []
        let count = 0;
        while (root || stack.length > 0) {
            while (root) {
                stack.push(root);
                root = root.right;
            }
            count++;
            root = stack.pop();
            if (count == k) {
                return root.value;
            }
            root = root.left;
        }
        return null;
    }
    kthLargestLevelSum(root, k) {
        if (!root) {
            return null
        }
        let q = [];
        q.push(root);
        q.push(null);
        let array = [];
        let result = 0;
        while (q.length > 0) {
            let currentNode = q.shift();
            if (currentNode != null) {
                result = result + currentNode.value;
                if (currentNode.left) { q.push(currentNode.left) }
                if (currentNode.right) { q.push(currentNode.right) }
            } else {
                array.push(result);
                result = 0;
                if (q.length > 0) { q.push(null) }
            }
        }
        array.sort((a, b) => a - b)
        return array[array.length-k];
    }

}



// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
tree.insert(19);
console.log(tree.printtree(tree.root))
// console.log(tree.depthOfTree(tree.root));
// console.log(tree.isValidBST(tree.root, null, null));
// console.log(tree.atrativeisValidBST(tree.root));
// console.log(tree.kmaximumElement(tree.root, 1));
console.log(tree.kthLargestLevelSum(tree.root, 2))





