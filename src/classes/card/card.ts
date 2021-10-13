import {
  Suit,
  Color,
  Num,
  Name,
  Card
} from './card.d'

const suits: Suit[] = [
  'spade',
  'club',
  'heart',
  'diamond',
]

const nums: Num[] = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
]

const names: Name[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
]

function getColorBySuit(suit: Suit): Color {
  if (suit === 'spade' || suit === 'club') {
    return 'black'
  }
  return 'red'
}

function getNameByNum(num: Num): Name {
  return names[num - 2]
}

export function getAllCards(): Card[] {
  let deck: Card[] = [];

  for (const suit of suits) {
    for (const num of nums) {
      deck.push({
        suit,
        color: getColorBySuit(suit),
        num,
        name: getNameByNum(num),
      })
    }
  }
  return deck
}
