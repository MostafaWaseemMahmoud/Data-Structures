class node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next
    }
}




// Creat Class Linkedk List


class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        this.head = new node(data , this.head)
        this.size++
    }
    
    addLast(data) {
        let Node = new node(data , null);
        let current;
        
        if (!this.head){
            this.head = Node;
        } else {
            current = this.head
            while (current.next) {
                current = this.head
                current = current.next;
                 
            }

            current.next = node;
        }
        this.size++ 
    }
}



const Li = new linkedList() 

Li.addFirst(10)
Li.addFirst(20)
Li.addFirst(30)
Li.addFirst(40)

Li.addLast(100)
console.log(Li)