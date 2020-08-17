fetch('http://127.0.0.1:5500/public/data.json', { method: 'GET' })
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((data) => {
    console.log(data)
    document.getElementById('data-list').innerHTML = data
      .map((v) => {
        return `<li>${v.text}</li>`
      })
      .join('')
  })
  .catch((error) => {
    console.log(error)
  })
