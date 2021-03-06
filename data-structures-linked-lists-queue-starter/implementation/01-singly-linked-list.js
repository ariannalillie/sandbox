// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // will not work if edge case for an empty list is added to the solution
        const newNode = new SinglyLinkedNode(val);


        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return oldHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined;

        const oldTail = this.head;
        this.length--;

        if (this.length === 1) {
            this.head = null;
            return oldTail;
        }
            let curr = this.head;
            let prev;

            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = null;
            return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) return this.head.value
    }

    print() {
        // Print out the linked list
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
