const data = [
  { name: '張小花', tel: '02‑29879998' },
  { name: '吳阿寶', tel: '02‑29871172' },
  { name: '陳天才', tel: '02‑29679991' },
]

let display = ''

for (let i = 0; i < data.length; i++) {
  display += `<tr><td>${data[i].name}</td><td>${data[i].tel}</td></tr>`
}

document.getElementById('result').innerHTML = display

//----------

function myFunction(x, y) {
  return function () {
    console.log(x + y)
  }
}

const myFunction1 = function (x, y) {
  return function () {
    console.log(x + y)
  }
}

const myFunction2 = (x, y) => {
  return function () {
    console.log(x + y)
  }
}

const myFunction3 = (x, y) =>
  function () {
    console.log(x + y)
  }

const myFunction4 = (x, y) => () => {
  return console.log(x + y)
}

const myFunction5 = (x, y) => () => console.log(x + y)
