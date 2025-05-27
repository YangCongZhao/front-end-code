// 定义二叉树节点的类型
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// 二叉树节点类
class Node implements TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// class BinaryTreeDFS {
//   // DFS-前序遍历
//   preorderTraversal(root: TreeNode | null): number[] {
//     const result: number[] = [];
//     function preorder(node: TreeNode | null): void {
//       if (node === null) return;
//       result.push(node.val); 
//       preorder(node.left); 
//       preorder(node.right); 
//     }
    
//     preorder(root);
//     return result;
//   }
//   // DFS-中序遍历
//   inorderTraversal(root: TreeNode | null): number[] {
//     const result: number[] = [];
    
//     function inorder(node: TreeNode | null): void {
//       if (node === null) return;
//       inorder(node.left);  
//       result.push(node.val); 
//       inorder(node.right);  
//     }
//     inorder(root);
//     return result;
//   }

//   // DFS-后序遍历
//   postorderTraversal(root: TreeNode | null): number[] {
//     const result: number[] = [];
//     function postorder(node: TreeNode | null): void {
//       if (node === null) return;
//       postorder(node.left); 
//       postorder(node.right); 
//       result.push(node.val); 
//     }
//     postorder(root);
//     return result;
//   }

//  // 广度优先遍历
//   levelOrderTraversal(root: TreeNode | null): number[] {
//     const result: number[] = [];
//     if (root === null) return result;

//     const queue: TreeNode[] = [root]; // 使用队列存储节点

//     while (queue.length > 0) {
//       const node = queue.shift()!; // 取出队列头部节点
//       result.push(node.val); // 访问当前节点

//       // 将左右子节点加入队列（如果存在）
//       if (node.left !== null) queue.push(node.left);
//       if (node.right !== null) queue.push(node.right);
//     }

//     return result;
//   }

// }

// 二叉树DFS遍历类（使用栈）
class BinaryTreeDFS {
  // 前序遍历
  preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (root === null) return result;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
      const node = stack.pop()!; // 取出栈顶节点
      result.push(node.val); // 访问根

      // 先压右子节点（后访问），再压左子节点（先访问）
      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }

    return result;
  }

  // 中序遍历
  inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || stack.length > 0) {WW
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop()!;
      result.push(current.val);
      current = current.right;
    }

    return result;
  }

  // 后序遍历
  postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (root === null) return result;

    const stack: TreeNode[] = [root];
    const outputStack: number[] = []; 

    while (stack.length > 0) {
      const node = stack.pop()!;
      outputStack.push(node.val);
      if (node.left !== null) stack.push(node.left);
      if (node.right !== null) stack.push(node.right);
    }

    // 逆转结果得到后序遍历
    return outputStack.reverse();
  }
}





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;

  // 栈存储节点及其深度
  const stack = [[root, 1]];
  let maxDepth = 0;

  while (stack.length > 0) {
    const [node, depth] = stack.pop()!;
    maxDepth = Math.max(maxDepth, depth);

    if (node.right !== null) stack.push([node.right, depth + 1]);
    if (node.left !== null) stack.push([node.left, depth + 1]);
  }

  return maxDepth;
};