class Node {
    constructor(value, next = null) {
      this.val = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    add(val) {
      const newNode = new Node(val);
      if (this.head === null) {
        this.head = newNode;
        console.log("Added! as Head Node" + val);
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        console.log("Added! " + val);
      }
      this.size++;
  }
  
  
  
  addFront(val) {
      if (this.head === null) {
        this.head = new Node(val);
        console.log("Adeed to head! " + val);
      } else {
        let temp = this.head;
        this.head = new Node(val);
        this.head.next = temp;
        console.log("Added! to the head" + val);
      }
  }

  removeFront() {
    if (this.head === null) {
      return "list is empty, partner!!"
    } else {
      this.head = this.head.next
    }
    this.size--;
  }

  front() {
    
    if (this.head == null) {
        return null;
    } else { 
        return this.head.value;
    }
}
}