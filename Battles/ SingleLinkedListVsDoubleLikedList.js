/*


========= SingleLinkedList (Vs) DoubleLinkedList ==========

*/


// (1) SingleLinkedList

//    بيكون فيه رابط واحد للعنصل التالي (Node)/(SingleLinkedList) ان 




class Node  {
    constructor(data , next=null) {
        this.data = data
        this.next = next
        
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    addFisrt(data) {
        this.head = new Node(data , this.head);
        this.size++
    }

        addLast(data) {
        let node = new Node(data , null);
        let current;
        
        if (!this.head){
            this.head = node;
        } else {
            current = this.head
            while (this.head.next) {
                current = this.head
                current = current.next;
            }

            current.next = node;
        }
        this.size++ 
    }


    AddAtIndex(data , index) {
        if (index < 0 || index > this.size) return;


        if (index == 0) {
            this.addFisrt(data)
        }
        
        if (index == size - 1) {
            this.addLast(data)
        }
            
    }


    getdata() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
} 


const Li = new LinkedList()

Li.addFisrt(10)
Li.addLast(100)
Li.getdata()
console.log(Li)

//     بيكون فيه رابط واحد للعنصل التالي  والعنصر السابق(Node)/(DoubleLinkedList) ان 
// مما يتيح لك الفرصه من بالتحكم اسهل بال البيانات من الجهتين 

class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.print(); // Output: 1, 2, 3


