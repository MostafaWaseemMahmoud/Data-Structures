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