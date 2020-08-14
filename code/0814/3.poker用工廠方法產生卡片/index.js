// card ={ flower, point, toString }

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
        default:
          display = this.point
          break
      }

      return this.flower + display
    },
  }
}

//♠️♣️♥️♦️
const card = createCard('♠️', 1)
document.getElementById('cards').innerHTML = card.toString()
