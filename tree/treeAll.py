class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = TreeNode(value)
        if not self.root:
            self.root = new_node
            return self
        current = self.root
        while True:
            if value < current.value:
                if not current.left:
                    current.left = new_node
                    return self
                current = current.left
            else:
                if not current.right:
                    current.right = new_node
                    return self
                current = current.right

    def print_tree(self, root):
        if not root:
            return
        self.print_tree(root.left)
        print(root.value)
        self.print_tree(root.right)

    def depth_of_tree_binary(self, root):
        if not root:
            return 0
        left = 0
        right = 0
        current = root
        while current:
            left += 1
            current = current.left
        current1 = root
        while current1:
            right += 1
            current1 = current1.right
        return max(left, right)

    def depth_of_tree(self, root):
        if not root:
            return 0
        left_depth = self.depth_of_tree(root.left)
        right_depth = self.depth_of_tree(root.right)
        return 1 + max(left_depth, right_depth)

    def is_valid_BST(self, root, min_val=None, max_val=None):
        if not root:
            return True
        if (max_val is not None and root.value >= max_val) or (min_val is not None and root.value <= min_val):
            return False
        return self.is_valid_BST(root.left, min_val, root.value) and self.is_valid_BST(root.right, root.value, max_val)

    def attractive_is_valid_BST(self, root):
        if not root:
            return True
        stack = []
        prev = None
        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            print(root.value)
            if prev is not None and root.value <= prev.value:
                return False
            prev = root
            root = root.right
        return True

    def k_maximum_element(self, root, k):
        if not root:
            return None
        stack = []
        count = 0
        while root or stack:
            while root:
                stack.append(root)
                root = root.right
            count += 1
            root = stack.pop()
            if count == k:
                return root.value
            root = root.left
        return None

    def kth_largest_level_sum(self, root, k):
        if not root:
            return None
        q = [root, None]
        array = []
        result = 0
        while q:
            current_node = q.pop(0)
            if current_node:
                result += current_node.value
                if current_node.left:
                    q.append(current_node.left)
                if current_node.right:
                    q.append(current_node.right)
            else:
                array.append(result)
                result = 0
                if q:
                    q.append(None)
        array.sort()
        return array[-k] 

    def max_level_sum(self, root):
        if not root:
            return None
        q = [root]
        max_sum = 0
        level = 0
        while q:
            level_number = len(q)
            level_sum = 0
            while level_number > 0:
                current_node = q.pop(0)
                level_sum += current_node.value
                if current_node.left:
                    q.append(current_node.left)
                if current_node.right:
                    q.append(current_node.right)
                level_number -= 1
            if level_sum > max_sum:
                max_sum = level_sum
                level += 1
        return level
    def isSymmetric(self,root):
        if not root:
            return True
        queue = [root]
        while queue:
            list = []
            for _ in range(len(queue)):
                node = queue.pop(0)
                if node:
                    list.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right) 
                else:
                    list.append(None)
            if  list != list[::-1]:
                return False
        return True   

        
            






# Example usage:
tree = BinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(12)
tree.insert(18)
tree.insert(19)
tree.print_tree(tree.root)
# print(tree.depth_of_tree(tree.root))
# print(tree.is_valid_BST(tree.root, None, None))
# print(tree.attractive_is_valid_BST(tree.root))
# print(tree.k_maximum_element(tree.root, 1))
print(tree.kth_largest_level_sum(tree.root, 3))
print(tree.max_level_sum(tree.root))
