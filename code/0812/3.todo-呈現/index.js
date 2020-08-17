// 讓程式碼簡短一些
const byId = (id) => document.getElementById(id) // 取得 DOM

// ES5
// const xxx = function (id){
//   console.log(id)
    // return document.getElementById(id)
// }

// ES6
// const xxx = (id) => console.log(id)




// 先獲得目前的元件參照
const todoAdd = byId('todo-add')
const todoInput = byId('todo-input')
const todoList = byId('todo-list')

// 所有的待辦事項要放在這個陣列中
const todos = []

// 用於呈現項目到網頁上的函式
const displayTodoList = () => {
  let display = ''
  let abc = 123
  for (let i = 0; i < todos.length; i++) {
    display += '<li>' + todos[i] + '</li>'
  }

  todoList.innerHTML = '<ul>' + display + '</ul>'
}







todoAdd.addEventListener('click', (z) => {
  // 加入 todoInput 輸入值到 todos 陣列

  if (todoInput.value.trim()) {
    todos.unshift(todoInput.value)
  }

  // todos = [123,456,789];

  //每輸入一次清除 todoInput
  // todoInput.value = ''

  // 呼叫呈現的函式
  displayTodoList()

})
