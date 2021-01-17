class StackDataStructure {
  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 10
  }

  display() {}

  canPush() {
    // ... your code goes here
  }

  canPop() {}

  isEmpty() {
    return !this.stackControl.length
  }

  isFull() {
    return this.stackControl.length >= MAX_SIZE
  }

  push(item) {
    // ... your code goes here
  }

  pop() {
    if (!this.isEmpty()) {
      // pop and lock
    }
  }
}
