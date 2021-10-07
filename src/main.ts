import { Card } from './card/card.d'
import { getDeck } from './card/card'

function startGame(): void {
  const deck = getDeck()
  console.log(deck)
}
