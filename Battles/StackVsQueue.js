/*

===== Stack Vs Queue =====

*/



// Stack (1)

// stack ف
// الااضافه والحذف تكون من نفس من الجهه حيث تكون firstout last in
class stack {
    constructor() {
        this.items = [];
        this.count = 0
    }

    // push elements in a stack

    push(ele) {
        this.items[this.count] = ele
        console.log(`Element ${ele} Pushed to Index ${this.count}`)
        this.count++
        console.log("")
        console.log("###########")
        console.log("")
    }

    pop() {
        if (this.count == 0) { console.log(`-> The Stack Is Empty You Can't Remove <-`) } else {
            let removeEle = this.items[this.count - 1]
            this.count--
            console.log(`Element ${removeEle} Removed From Index ${this.count}`)
            this.items.pop()
        }
    }

    isEmpty() {
        if (this.count == 0) {
            console.log(`==> The Stack Is Empty <==`)
            console.log('')
        } else {
            console.log(`==> The Stack Is Not Empty <==`)
            console.log('')
        }
    }


    getStackLenght() {
        console.log('Stack Lenght Is:', this.items.length)
        console.log('')

    }


    geElementWithindex(index) {
        if (index > this.items.length - 1) {
            console.log('This Item Is Not Stack')
            console.log('')
        } else {
            console.log(`The Element ${this.items[index]} Is in In index ${index}`)
            console.log('')

        }

    }
}


const stackInst = new stack()

stackInst.push(1)
stackInst.push(2)
stackInst.push(3)
stackInst.push(4)

stackInst.isEmpty()

stackInst.getStackLenght()

stackInst.geElementWithindex(1)
stackInst.geElementWithindex(6)
// queues (2)

// Queues ف
// first in last in
// حيث تكون الاضافه والحذف من الجهتين حيث من البدايه تكون الحذف ومن النهايه تكون الاضافه مثل الطابور

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
