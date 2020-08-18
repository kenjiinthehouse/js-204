/*
get http://localhost:3000/counter/1

{
  "id": 1,
  "total": 999
}

put http://localhost:3000/counter/1

req
{
"total": 998
}

res
{
  "total": 998,
  "id": 1
}
*/

const byId = (id) => document.getElementById(id)

const getDataFromServer = async () => {
  try {
    // 連接伺服器，同一台電腦上，得到回應值
    const response = await fetch('http://localhost:3000/counter/1')

    if (!response.ok) throw new Error('Server has error')

    // 由response物件，剖析出json資料
    const data = await response.json()

    // 得到data資料，顯示在網頁上
    document.getElementById('total').innerHTML = data.total
  } catch (error) {
    console.log(error)
  }
}

const putDataToServer = async (value) => {
  try {
    // 由網頁得到目前的total值
    const total = +byId('total').innerHTML + value
    // 建立一個物件，準備轉成json字串格式送到伺服器
    const newData = { total }

    // 連接伺服器
    const response = await fetch('http://localhost:3000/counter/1', {
      // 使用的方法
      method: 'PUT',
      // 指示此資料為json格式
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      // 傳送的主體資料(json字串格式)
      body: JSON.stringify(newData),
    })

    if (!response.ok) throw new Error('伺服器錯誤')

    // 目前沒用到，由response物件，剖析出json資料
    const data = await response.json()

    if (data.total) byId('total').innerHTML = total
  } catch (error) {
    console.log(error)
  }
}

byId('add').addEventListener('click', function () {
  putDataToServer(1)
})

byId('minus').addEventListener('click', function () {
  putDataToServer(-1)
})

// 一開始先執行初始化，從伺服器端獲取資料
getDataFromServer()
