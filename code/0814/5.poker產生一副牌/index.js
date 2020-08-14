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

const cards = []

const initCards = () => {
  const flowers = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  for (let i = 0; i < flowers.length; i++) {
    for (let j = 0; j < points.length; j++) {
      cards.push(createCard(flowers[i], points[j]))
    }
  }
}

// flower: h, d, s, c
//const card = createCard('h', 13)
//document.getElementById('cards').appendChild(card.toString())

initCards()
console.log(cards)
