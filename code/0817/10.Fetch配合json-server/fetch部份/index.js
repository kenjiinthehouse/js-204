let selectedName = ''

const showSpinner = (isLoading = false) => {
  if (isLoading) {
    // 每次載入前先清除目前的列表
    document.getElementById('data-list').innerHTML = ''

    //呈現載入指示圖
    document.getElementById('spinner').innerHTML = `
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>`
  } else {
    document.getElementById('spinner').innerHTML = ''
  }
}

const getUserDataFromServer = (name) => {
  // 開始載入資料，呈現載入指示圖
  showSpinner(true)

  // 連接伺服器，同一台電腦上
  fetch(`http://localhost:3000/users/?name=${name}`, { method: 'GET' })
    .then((response) => {
      console.log(response)
      if (!response.ok) throw new Error('error....bye')

      // 得到response物件，回傳剖折出json資料
      return response.json()
    })
    .then((data) => {
      console.log(data)

      // 重點：用第一台伺服器的資料，來連上第二台伺服器
      // 要用回傳promise物件的語法
      return fetch(`http://localhost:3000/todos/?userid=${data[0].id}`, {
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

      // 1500微秒後關起載入的指示圖，然後呈現資料
      setTimeout(() => {
        showSpinner(false)

        // 得到data資料，顯示在網頁上
        document.getElementById('data-list').innerHTML = data
          .map((v) => {
            return `<li>${v.text}</li>`
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
