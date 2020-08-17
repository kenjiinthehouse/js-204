let selectedName = ''
let selectedUserid = 0

const showSpinner = (isLoading = false) => {
  if (isLoading) {
    document.getElementById('data-list').innerHTML = ''

    document.getElementById('spinner').innerHTML = `
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>`
  } else {
    document.getElementById('spinner').innerHTML = ''
  }
}

const getUserDataFromServer = (name) => {
  showSpinner(true)

  // 連接伺服器，同一台電腦上
  fetch('http://127.0.0.1:5500/public/user.json', { method: 'GET' })
    .then((response) => {
      console.log(response)
      if (!response.ok) throw new Error('error....bye')

      // 得到response物件，回傳剖折出json資料
      return response.json()
    })
    .then((data) => {
      const user = data.find((v) => v.name === name)
      const userid = user.id
      selectedUserid = user.id

      // 重點：用第一台伺服器的資料，來連上第二台伺服器
      // 要用回傳promise物件的語法
      return fetch('http://127.0.0.1:5500/public/data.json?userid=' + userid, {
        method: 'GET',
      })
    })
    .then((response) => {
      console.log(response)
      if (!response.ok) throw new Error('error....bye')

      // 得到response物件，回傳剖折出json資料
      return response.json()
    })
    .then((data) => {
      console.log(data)

      setTimeout(() => {
        showSpinner(false)

        // 得到data資料，顯示在網頁上
        document.getElementById('data-list').innerHTML = data
          .map((v) => {
            if (v.userid === selectedUserid) return `<li>${v.text}</li>`
          })
          .join('')
      }, 1500)
    })
    .catch((error) => {
      // 有錯誤在這裡處理
      console.log(error)
    })
}

// 下拉選單觸發事件，用change
document.getElementById('user-list').addEventListener('change', (event) => {
  selectedName = event.target.value
  getUserDataFromServer(selectedName)
})
