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

let l1 = new LList(1)
l1.insert(1,1)
l1.insert(1,1)
l1.insert(2,1)


var deleteDuplicates = function(head) {
    let currNode = head;
    while (currNode && currNode.next) {
        if (currNode.val === currNode.next.val) {
            currNode.next = currNode.next.next; // Skip the duplicate node
        } else {
            currNode = currNode.next; // Move to the next node
        }
    }
    return head;
};

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer by 1 step
        fast = fast.next.next; // Move fast pointer by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
    
};


var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
    return Array.from(intersectionSet);
    //换一种写法 不要用api 
    let result = []
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                result.push(nums1[i])
            }                        
        }
    }

    return result
};
console.log(intersection([4,9,5],[9,4,9,8,4]))