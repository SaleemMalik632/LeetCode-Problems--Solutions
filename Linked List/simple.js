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
            while (currentNode.next != null) {
                if (currentNode.next.data == val1) {
                    console.log('dsdsd');
                    currentNode.next = currentNode.next.next; // Update the reference to skip the node with val1
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    // Middle of the Linked List
    MiddleLinkedlist() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
    revercelinkist() {
        let current = this.head;
        let previous = null;
        let next = this.head.next;
        while (current.next) {
            current.next = previous;
            previous = current;
            current = next;
            next = next.next
        }
        return previous;
    }
    mergetwosorttedlist(list1, list2) {
        let dummy = new LinkedList();
        let current = dummy;
        let current1 = list1;
        let current2 = list2;
        while (current1 && current2) {
            if (current1.val < current2.val) {
                current.next = current1;
                current1 = current1.next;
            } else {
                current.next = current2;
                current2 = current2.next;
            }
            current = current.next;
        }

        if (current1) {
            current.next = current1;
        }
        if (current2) {
            current.next = current2;
        }
        return dummy.next;
    }
    removeNthFromEnd(n) {
        let lenght = 0;
        let current = this.head;
        while (current != null) {
            current = current.next;
            lenght++;
        }
        let index = (lenght - n) - 1;
        let current1 = this.head;
        let idx = 0;
        while (current1 != null) {
            if (idx == index) {
                current1 = current1.next.next
                delete current1.next;
                break;
            }
            current1 = current1.next;
        }
        return this.head;
    }
    isPalindrome() {
        // let current = this.head;
        // let listval = [] 
        // while (current) {
        //     listval.push(current.data)
        //     current = current.next;
        // }
        // let right = listval.length - 1;
        // for (let i = 0; i < listval.length; i++) {
        //     if (listval[i] != listval[right]) {
        //         return false;
        //     }
        //     right--; 
        // }
        // return true;
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let reverceSecodeMiddle = this.revercelinkist1(slow);
        let temp = this.head;
        while (reverceSecodeMiddle) {
            if (temp.data != reverceSecodeMiddle.data) {
                return false;
            }
            reverceSecodeMiddle = reverceSecodeMiddle.next;
            temp = temp.next;
        }
        return true;
    }
    revercelinkist1(head) {
        let current = head;
        let previous = null;
        while (current) {
            let temp = current.next;
            current.next = previous;
            previous = current
            current = temp;

        }
        return previous;
    }

    hascycle() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
    


    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

var mergetwosorttedlist = function (list1, list2) {
    let dummy = new LinkedList();
    let current = dummy;
    let current1 = list1;
    let current2 = list2;
    while (current1 && current2) {
        if (current1.val < current2.val) {
            current.next = current1;
            current1 = current1.next;
        } else {
            current.next = current2;
            current2 = current2.next;
        }
        current = current.next;
    }

    if (current1) {
        current.next = current1;
    }
    if (current2) {
        current.next = current2;
    }
    return dummy.next;
}



const list = new LinkedList();
const list1 = new LinkedList();
list.insert(1);
list.insert(2);
// list.insert(3);
// list.insert(2);
// list.insert(1);
// list.insert(6);

list1.insert(7);
list1.insert(8);
list1.insert(9);
list1.insert(10);
list1.insert(11);
list1.insert(12);
// list.update(5, 10)
// console.log(list.MiddleLinkedlist());
// list.revercelinkist();
// console.log(list.removeNthFromEnd(2));
// console.log(mergetwosorttedlist(list, list1))
console.log(list.isPalindrome())
// list.print();