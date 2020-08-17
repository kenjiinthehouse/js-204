// 利用作用域傳入變數值，建立出自己的promise物件

// const asyncFunction = (value) => {
//   return new Promise((resolve, reject) => {
//     if (value) resolve(value)
//     else reject('Error')
//   })
// }

// 建立promise物件
const promise = new Promise((resolve, reject) => {
  // fulfilled
  resolve(3)

  // rejected
  reject('Error....Error....bye')
})

// 對promise物件進行操作，then針對有實現值，catch針對錯誤處理
promise
  .then((value) => {
    console.log('fulfilled', value)
    return value + 1
  })
  .then((value) => {
    console.log('fulfilled', value)
    return value + 2
  })
  .catch((reason) => {
    console.log('reject', reason)
  })
