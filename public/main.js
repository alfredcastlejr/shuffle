const buildDeck = () => {
  // this code will build a deck
  const deck = []

  ;['Clubs', 'Diamonds', 'Hearts', 'Spades'].forEach(suit => {
    ;[
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King'
    ].forEach(card => {
      deck.push(suit + ' ' + card)
    })
  })

  return deck
}

const shuffleDeck = deck => {
  // this code will shuffle my deck
  deck.sort((a, b) => {
    // We have a 50% chance
    if (Math.random() > 0.5) {
      return 1
    } else {
      return -1
    }
  })
}

const dealCard = deck => {
  // First card
  deck[0]
}

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const main = () => {
  //build a deck and saves on a new variable
  const deck = buildDeck()

  //shuffle a deck
  shuffle(deck)

  console.log(deck)

  //deal a card
  const button = document.querySelector('button')
  button.addEventListener('click', dealCard)
}

document.addEventListener('DOMContentLoaded', main)
