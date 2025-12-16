/*************************************
 * ESCALATOR SYSTEM – DSA (QUEUE)
 * JavaScript | All-in-One File
 *************************************/

class Escalator {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
  }

  /* Person enters escalator */
  enter(person) {
    if (this.queue.length >= this.capacity) {
      console.log(`Escalator full ❌ : ${person} cannot enter`);
      return;
    }
    this.queue.push(person); // ENQUEUE
    console.log(`${person} entered the escalator`);
  }

  /* Person exits escalator */
  exit() {
    if (this.queue.length === 0) {
      console.log("Escalator empty ❌");
      return;
    }
    let person = this.queue.shift(); // DEQUEUE
    console.log(`${person} exited the escalator`);
  }

  /* Display current escalator state */
  display() {
    if (this.queue.length === 0) {
      console.log("Escalator is empty");
    } else {
      console.log("On Escalator:", this.queue.join(" → "));
    }
  }
}

/* ===============================
   TESTING ESCALATOR SYSTEM
   =============================== */

let escalator = new Escalator(3);

escalator.enter("Person A");
escalator.enter("Person B");
escalator.enter("Person C");
escalator.enter("Person D"); // exceeds capacity

escalator.display();

escalator.exit();
escalator.display();

escalator.exit();
escalator.exit();
escalator.exit(); // empty case

console.log("\nESCALATOR SYSTEM EXECUTED ✅");
