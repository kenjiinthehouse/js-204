console.log('a')

setTimeout(() => console.log('b1'), 0)

setTimeout(() => console.log('b2'), 0)

console.log('c')

for (let i = 0; i < 1000; i++) {
  console.log(i)
}
