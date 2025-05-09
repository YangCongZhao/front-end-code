/*
    构建二叉搜索树的节点类
    每个节点包括一个当前数据，一个左子节点和一个右子节点
    以及一个显示当前节点数据的方法
*/
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    function show(){
        return this.data;
    }
}
/*
    构建二叉搜索树类
    包括一个根节点，一个插入节点的方法和一个中序遍历的方法  
*/
function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    
}
/*
    插入节点的方法
    1. 创建一个新的节点
    2. 如果树为空，则将当前节点作为根节点
    3. 如果树不为空，则从根节点开始遍历树
    4. 如果当前节点数据大于插入节点数据，则向左子树遍历
    5. 如果当前节点数据小于插入节点数据，则向右子树遍历
    6. 如果当前节点的左子节点为空，则将当前节点的左子节点指向插入节点
    7. 如果当前节点的右子节点为空，则将当前节点的右子节点指向插入节点
    8. 如果当前节点的左子节点不为空，则继续向左子树遍历
    9. 如果当前节点的右子节点不为空，则继续向右子树遍历
    10. 直到找到一个空的子节点，将插入节点插入到该位置
    11. 返回树的根节点
*/
function insert(data){
    var node = new Node(data,null,null);
    if(this.root == null){
        this.root = node;
    }else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = node;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

function inOrder(node){
    if(node != null){
        this.inOrder(node.left);
        console.log(node.show());
        this.inOrder(node.right);

    }
}

function preOrder(node){
    if(node != null){
        console.log(node.show());
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

let arr = [56,22,81,10,30,77,92];
let bst = new BST();
for(let i = 0; i < arr.length; i++){
    bst.insert(arr[i]);
}
console.log("先序遍历二叉搜索树：");
bst.preOrder(bst.root);
console.log("二叉搜索树的根节点数据：" + bst.root.show());

Array.isArray