console.log('a')

// 連接伺服器，同一台電腦上
// 拋出錯誤示範
fetch('http://127.0.0.1:5500/public/data21321.json', { method: 'GET' })
  .then((response) => {
    console.log(response)
    if (!response.ok) throw new Error('error....bye')

    // 得到response物件，回傳剖折出json資料
    return response.json()
  })
  .then((data) => {
    console.log(data)

    console.log('b')

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

console.log('c')
