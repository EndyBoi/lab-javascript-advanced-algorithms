// console.dir(document)
const stackList = document.getElementById("stack-list")
const stackInput = document.getElementById("stack-input")
// const container = document.getElementById("container")
const warningTopStack = document.querySelector("#stack-container .warning-top")
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
)
const addStackBtn = document.getElementById("add-stack")
const takeStackBtn = document.getElementById("take-stack")

const stackSize = 12
const newStack = new StackDataStructure(stackSize)

const clearStackInput = () => {
  stackInput.value = ""
}

const renderListStack = () => {
  warningTopStack.style.display = "none"
  warningBottomStack.style.display = "none"
  stackList.innerHTML = ""

  let length = newStack.display().length
  let size = stackSize - length

  newStack.display().forEach((item) => {
    let stack = document.createElement("li")

    stack.className = "active"
    stack.innerText = item
    stackList.appendChild(stack)
  })
  for (let i = 0; i < size; i++) {
    let stack = document.createElement("li")

    stack.className = "inactive"
    stack.innerHTML = ""
    stackList.appendChild(stack)
  }
}
renderListStack()

const generateWarningStack = (type) => {
  if (type === "underflow") {
    warningBottomStack.style.display = "block"
    warningBottomStack.innerText = type
  } else if (type === "overflow") {
    warningTopStack.style.display = "block"
    warningTopStack.innerText = type
  }
}

const addToStack = () => {
  if (newStack.push(stackInput.value) === "Stack Overflow") {
    generateWarningStack("overflow")
  } else {
    clearStackInput()
    renderListStack()
  }
}

const removeFromStack = () => {
  if (newStack.pop() === "Stack Underflow") {
    generateWarningStack("underflow")
  } else {
    renderListStack()
  }
}

addStackBtn.addEventListener("click", addToStack)
takeStackBtn.addEventListener("click", removeFromStack)
