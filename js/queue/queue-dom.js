// console.dir(document)
const queueUL = document.querySelector(".list-queue")
const queueInput = document.querySelector(".queue-input")
// const container = document.getElementById("container")
const warningTopQueue = document.querySelector("#queue-container .warning-top")
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
)
const addQueue = document.querySelector(".btn-add-queue")
const dequeue = document.querySelector(".btn-take-dequeue")

const sizeStructure = 30
const queue = new QueueDataStructure(sizeStructure)

const clearQueueInput = () => {
  queueInput.value = ""
}

const generateListQueue = () => {
  warningTopQueue.style.display = "none"
  warningBottomQueue.style.display = "none"
  queueUL.innerHTML = ""

  let length = queue.display().length
  let size = sizeStructure - length

  queue.display().forEach((item) => {
    let queue = document.createElement("li")

    queue.className = "active"
    queue.innerText = item
    queueUL.appendChild(queue)
  })
  for (let i = 0; i < size; i++) {
    let queue = document.createElement("li")

    queue.className = "inactive"
    queue.innerHTML = ""
    queueUL.appendChild(queue)
  }
}
generateListQueue()

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    warningBottomQueue.style.display = "block"
    warningBottomQueue.innerText = type
  } else if (type === "overflow") {
    warningTopQueue.style.display = "block"
    warningTopQueue.innerText = type
  }
}

const addToQueue = () => {
  if (queue.enqueue(queueInput.value) === "Queue Overflow") {
    generateWarningQueue("overflow")
  } else {
    clearQueueInput()
    generateListQueue()
  }
}

const removeFromQueue = () => {
  if (queue.dequeue() === "Queue Underflow") {
    generateWarningQueue("underflow")
  } else {
    generateListQueue()
  }
}

addQueue.addEventListener("click", addToQueue)
dequeue.addEventListener("click", removeFromQueue)
