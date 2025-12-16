class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  /* Insert at End */
  insert(data) {
    let newNode = new Node(data);

    // If list is empty
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = this.head;
  }

  /* Display List */
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let temp = this.head;
    do {
      console.log(temp.data);
      temp = temp.next;
    } while (temp !== this.head);
  }
}
