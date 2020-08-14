const displayTime = () => {
  const now = new Date()
  document.getElementById('clock').innerHTML = now.toLocaleTimeString()
}

let timerId = null

document.getElementById('start').addEventListener('click', function () {
  timerId = setInterval(displayTime, 1000)
})

document.getElementById('stop').addEventListener('click', function () {
  clearInterval(timerId)
})
