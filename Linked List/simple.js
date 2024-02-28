
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        const newnode = new Node(val);
        if (this.head == null) {
            this.head = newnode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newnode
        }
    }
    delete(val) {
        if (this.head.data === val) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            while (currentNode != null) {
                if (currentNode.next.data == val) {
                    currentNode.next = currentNode.next.next;
                    delete currentNode.next;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    update(val1, val2) {
        if (this.head.data == val1) {
            this.head.data = val2;
        } else {
            let currentNode = this.head;
            while (currentNode != null) {
                if (currentNode.data == val1) {
                    currentNode.data = val2;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    // Middle of the Linked List
    MiddleLinkedlist() {
        // let slow = this.head;
        // let fast = this.head;
        // while (fast.next !== null && fast != null) {
        //     slow = slow.next;
        //     fast = fast.next.next;
        // }
        // return slow.data;
        let lenght = 0;
        let currentNode = this.head;
        let arry = []
        while (currentNode) {
            arry.push(currentNode.data)
            currentNode = currentNode.next;
            lenght++
        }
        console.log(arry[Math.floor((lenght / 2))])
        return Math.ceil((lenght / 2))
    }
    // revercelinkist() {
    //     let previous = null;
    //     let current = this.head;
    //     while (current) {
    //         current.next = previous;
    //         previous = current;
    //         previous = current;
    //         current = current.next;
    //     }
    //     let newcurrnet  = previous;
    //     while(newcurrnet){
    //         console.log(newcurrnet.data)
    //          newcurrnet = newcurrnet.next;
    //     }
    // }
    revercelinkist(){
        let current = this.head;
        let previous = null;
        let next = null;
        while(current){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        this.print();
    }





    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.update(5, 10)
// console.log(list.MiddleLinkedlist());
list.revercelinkist();
// list.print();