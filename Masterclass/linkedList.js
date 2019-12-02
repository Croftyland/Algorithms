//Implement linked list class
//const linkedList = new LinkedList();

//first step

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

let first = new Node('first');

first.next = new Node('second');
first.next.next = new Node('third');
first.next.next.next = new Node('forth');


//second step

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    indexOf(val) {
        let findNode = this.head;

        while(findNode) {
            if(findNode.value === val) {
                return findNode;
            }

            findNode = findNode.next;
        }

        return findNode;
    }
}

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

linkedList.indexOf(2); // 1

linkedList.pop(); // 4

console.log(`${linkedList}`); // 1, 2, 3, 4
