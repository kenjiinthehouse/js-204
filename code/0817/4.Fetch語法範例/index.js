// 連接伺服器，同一台電腦上
fetch('http://127.0.0.1:5500/public/data.json', { method: 'GET' })
  .then((response) => {
    console.log(response)

    // 得到response物件，回傳剖折出json資料
    return response.json()
  })
  .then((data) => {
    console.log(data)

    // 得到data資料，顯示在網頁上
    document.getElementById('data-list').innerHTML = data
      .map((v) => {
        return `<li>${v.text}</li>`
      })
      .join('')
  })
  .catch((error) => {
    // 有錯誤在這裡處理
    console.log(error)
  })
