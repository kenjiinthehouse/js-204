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

const putDataToServer = async (total) => {
  try {
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
      // 傳送的主體資料(json格式)
      body: JSON.stringify(newData),
    })

    if (!response.ok) throw new Error('Server has error')

    // 目前沒用到，由response物件，剖析出json資料
    const data = await response.json()
  } catch (error) {
    console.log(error)
  }
}

getDataFromServer()

byId('add').addEventListener('click', function () {
  const newTotal = +byId('total').innerHTML + 1
  // 送到伺服器作更新
  putDataToServer(newTotal)
  // 在網頁上作更新
  byId('total').innerHTML = newTotal
})

byId('minus').addEventListener('click', function () {
  const newTotal = +byId('total').innerHTML - 1
  // 送到伺服器作更新
  putDataToServer(newTotal)
  // 在網頁上作更新
  byId('total').innerHTML = newTotal
})
