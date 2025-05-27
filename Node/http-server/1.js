function insert(data) {
    var node = new Node(data, null, null);
    if (this.root = null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current = null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current = null) {
                    parent.right = node;
                    break;
                }
            }
        }

    }
}
function Node(Data, Left, Right){ 
    this.data=Data;
    this.left = Left; 
    this.right = Right; 
    this.show = show;
     function show(){
         return this.data;
     }
}

function preorder(node){
     if(node != null){
        console.log(node.show()); 
        this.preOrder(node.left); 
        this.preorder(node.right)
     }
}




// 二叉树DFS遍历类
class BinaryTreeDFS {
  // 前序遍历（根 -> 左 -> 右）
  preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function preorder(node: TreeNode | null): void {
      if (node === null) return;
      result.push(node.val); 
      preorder(node.left);   
      preorder(node.right);  
    }
    
    preorder(root);
    return result;
  }

  // 中序遍历（左 -> 根 -> 右）
  inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function inorder(node: TreeNode | null): void {
      if (node === null) return;
      inorder(node.left);    
      result.push(node.val); 
      inorder(node.right);   
    }
    
    inorder(root);
    return result;
  }

  // 后序遍历（左 -> 右 -> 根）
  postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function postorder(node: TreeNode | null): void {
      if (node === null) return;
      postorder(node.left);  
      postorder(node.right); 
      result.push(node.val); 
    }
    
    postorder(root);
    return result;
  }
}
