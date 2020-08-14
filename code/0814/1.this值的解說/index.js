// 一般的函式
function normalFunction() {
  console.log(this)
}

normalFunction()

//-----------------

// 回調用
function callback() {
  console.log(this)
}

// 用了回調的函式
function hasCallbackFunction(cb) {
  cb()
}

hasCallbackFunction(callback)

//---------------------------------

// document.getElementById('test').addEventListener('click', function () {
//   console.log(this)
// })

//-----------------------------------

const aObject = {
  a: 1,
  b: 2,
  foo: function () {
    console.log(this.a)
    console.log(this.b)
    console.log(this)
  },
}

aObject.foo()

const bObject = {
  a: 88,
  b: 99,
}

const bar = aObject.foo.bind(bObject)

bar()

//------------

class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  callCallback(cb) {
    cb()
  }

  display() {
    console.log(this.name)

    document.getElementById('test').addEventListener('click', function () {
      console.log(this.name)
    })
  }
}

const eddy = new User(1, 'Eddy')
eddy.display()

eddy.callCallback(function () {
  console.log(this)
})
