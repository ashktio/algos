class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addVal(val) {
    let newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
      console.log("Added a new node as Head", val);
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  addFront(val) {
    // adding a node to the fron of a singly linked list
    let newNode = new Node(val);

    // pointing newNode to the head of the list if there is any
    newNode.next = this.head;

    // making newNode the head of the list
    this.head = newNode;
  }
  displaySLL() {
    let runner = this.head;

    while (runner != null) {
      console.log(runner.data);
      runner = runner.next;
      console.log("->");
    }
    return runner;
  }

  removeFront() {
    if (this.head == null) {
      return "List is empty";
    }
    // declare curr to hold the value of this.head
    let curr = this.head;
    // move the head to the next node in the line
    this.head = curr.next;

    //assign the null to the curr.next
    curr.next = null;
  }

  front() {
    if (this.head == null) {
      return "The list is empty";
    } else {
      return this.head.data;
    }
  }

  contains(val) {
    let runner = this.head;

    while (runner) {
      if (runner.data == val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  sllLength() {
    let runner = this.head;
    let theLength = 0;

    while (runner) {
      theLength++;
      runner = runner.next;
    }
    return theLength;
  }

  maxVal() {
    let runner = this.head;
    let maxi = this.head.data;

    while (runner) {
      if (runner.data > maxi) {
        maxi = runner.data;
      }
      runner = runner.next;
    }
    return maxi;
  }

  minVal() {
    let runner = this.head;
    let mini = this.head.data;

    while (runner) {
      if (runner.data < mini) {
        mini = runner.data;
      }
      runner = runner.next;
    }

    return mini;
  }

  ave() {
    let runner = this.head;
    let len = 0;
    let sumVal = 0;

    while (runner) {
      len++;
      sumVal += runner.data;
      runner = runner.next;
    }

    return sumVal / len;
  }

  back() {
    let runner = this.head;

    while (runner) {
      if (runner.next == null) {
        return runner.data;
      }
      runner = runner.next;
    }
  }

  removeBack() {
    let runner = this.head;

    if (runner == null) {
      return null;
    }

    if (runner.next == null) {
      return null;
    }

    while (runner) {
      if (runner.next.next == null) {
        runner.next = null;
        return;
      }
      runner = runner.next;
    }
  }
}

let mynode = new SLL();

// console.log(mynode.removeFront());
mynode.addVal(990);
mynode.addFront(8);
mynode.addFront(90);
mynode.addFront(10);
mynode.addFront(20);
mynode.addFront(6);
console.log(mynode.displaySLL());
mynode.removeFront();
mynode.removeBack();
console.log("logging sll after last value removal", mynode.displaySLL());
console.log(mynode.front());
console.log(mynode.contains(990));
console.log("the number of nodes in the list is", mynode.sllLength());
console.log("the maximum value is ", mynode.maxVal());
console.log("the minimum value is ", mynode.minVal());
console.log("the average if the values in the node is ", mynode.ave());
console.log("The last value in the list is ", mynode.back());
mynode.addFront(mynode.minVal());
console.log(mynode.displaySLL());
