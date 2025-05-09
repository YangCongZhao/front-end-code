function Node(element){
    //当前节点的元素
    this.element = element;
    //下一个节点的指针地址
    this.next = null
}
function find(item){
    let currNode = this.head
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode
}
function insert(newElement,item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode
}
function display(){
    let currNode = this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element)
        currNode = currNode.next
    }

}
function remove(item){
    let prevNode = this.findPrevious(item)
    if(!(prevNode.next===null)){
        prevNode.next = prevNode.next.next
    }
}
function findPrevious(item){
    let currNode = this.head;
    while(!(currNode.next===null) && currNode.next.element!==item){
        currNode = currNode.next
    }
    return currNode
}
function LList(item){
    this.head = new Node(item)
    this.find = find
    this.insert = insert
    this.display = display
    this.remove = remove
    this.findPrevious  = findPrevious
}

let l1 = new LList(2)
l1.insert(4,2)
l1.insert(3,4)
let l2 = new LList(5)
l2.insert(6,5)
l2.insert(4,6)


var addTwoNumbers = function(l1, l2) {
      
};
console.log(addTwoNumbers(l1,l2))