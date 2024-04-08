# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p, q):
        if p is None and q is None:
            return True
        if p is None or q is None:
            return False    
        q1 = [p]
        q2 = [q]
        while q1 or q2:
            for _ in range(max(len(q1),len(q2))):
                node1 = q1.pop(0)
                node2 = q2.pop(0)
                if node1.val != node2.val:
                    return False
                if node1.left and node2.left:
                    if node1.left.val == node2.left.val:
                            q1.append(node1.left)
                            q2.append(node2.left)
                    else:
                        return False
                if node1.left is None or node2.left is None:
                    if(node1.left is None and node2.left is not None)or( node2.left is None and node1.left is not None):
                            return False
                if node1.right and node2.right:
                    if node1.right.val == node2.right.val:
                            q1.append(node1.right)
                            q2.append(node2.right)
                    else:
                        return False   
                if node1.right is None or node2.right is None:
                    if(node1.right is None and node2.right is not None)or( node2.right is None and node1.right is not None):
                            return False        
        return True 
        