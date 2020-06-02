class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SLinkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  duplicate() {
    let curr = this.head;
    while (curr != null) {
      let temp = curr;

      while (temp != null && temp.data == curr.data) {
        temp = temp.next;
      }
      curr.next = temp;
      curr = curr.next;
    }
  }

  swap() {
    let temp = this.head;

    while (temp != null && temp.next != null) {
      let k = temp.data;
      temp.data = temp.next.data;
      temp.next.data = k;
      temp = temp.next.next;
    }
  }
  delete(data) {
    var current = this.head;
    if (this.head === data) {
      head = head.next;
      return;
    }

    while (current) {
      if (current.next) {
        var next = current.next;
        if (next.data === data) {
          current.next = next.next;
          this.size--;
          return;
        }
      }

      current = current.next;
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

const list = new SLinkedlist();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.print();
list.swap();
list.print();
