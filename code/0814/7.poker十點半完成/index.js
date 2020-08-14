// card ={ flower, point, toString }

// 寫成類別
class Card {
  constructor(flower, point) {
    this.flower = flower
    this.point = point
  }

  toString() {
    let display = ''

    switch (this.point) {
      case 1:
        display = 'A'
        break
      case 11:
        display = 'J'
        break
      case 12:
        display = 'Q'
        break
      case 13:
        display = 'K'
        break
      default:
        display = this.point
        break
    }

    return Poker.getCardImage(150, this.flower, display)
  }
}

// flower: h, d, s, c
// point:[A,......., JOKER ]
// 產生物件的工廠模式
const createCard = (flower, point) => {
  return {
    flower,
    point,
    toString: function () {
      let display = ''

      switch (this.point) {
        case 1:
          display = 'A'
          break
        case 11:
          display = 'J'
          break
        case 12:
          display = 'Q'
          break
        case 13:
          display = 'K'
          break
        default:
          display = this.point
          break
      }

      return Poker.getCardImage(150, this.flower, display)
    },
  }
}

// 產生52張牌
const initCards = () => {
  const cards = []
  const flowers = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  for (let i = 0; i < flowers.length; i++) {
    for (let j = 0; j < points.length; j++) {
      cards.push(createCard(flowers[i], points[j]))
    }
  }

  return cards
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const displayCard = (card) => {
  document.getElementById('cards').appendChild(card.toString())
}

// flower: h, d, s, c
//const card = createCard('h', 13)
//document.getElementById('cards').appendChild(card.toString())

// 全域的牌-陣列
let cards = shuffle(initCards())
let index = 0
let total = 0

document.getElementById('dispatch').addEventListener('click', () => {
  // 顯示卡片
  displayCard(cards[index])

  let point = cards[index].point
  // 如果點數是11, 12, 13 算是半點
  if (point > 10) point = 0.5

  total += point

  document.getElementById('point').innerHTML = `目前點數 ${total}`

  if (total > 10.5) {
    document.getElementById('result').innerHTML = `爆掉了`
  }

  // 索引值加1
  index++
})

document.getElementById('reset').addEventListener('click', () => {
  // 顯示卡片
  cards = shuffle(initCards())
  index = 0
  total = 0

  // 清空所有的顯示文字
  document.getElementById('cards').innerHTML = ''
  document.getElementById('point').innerHTML = ''
  document.getElementById('result').innerHTML = ''
})
