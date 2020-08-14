const displayTime = () => {
  const now = new Date()
  document.getElementById('clock').innerHTML = now.toLocaleTimeString()
}

let timerId = null

document.getElementById('start').addEventListener('click', function () {
  // timerId是一個整數值，可用於控制計時器關閉
  timerId = setInterval(displayTime, 1000)
  //console.log(timerId)
})

document.getElementById('stop').addEventListener('click', function () {
  // 清除計時器代表停止某個對應的計數器
  clearInterval(timerId)
})
