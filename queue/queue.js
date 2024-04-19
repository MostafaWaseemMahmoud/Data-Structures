class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift()
    }


    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }
}

const queue = new Queue();
console.log(queue.isEmpty()); 
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); 
console.log(queue.size()); 
console.log(queue.isEmpty()); 
console.log(queue.dequeue()); 
queue.print(); 
