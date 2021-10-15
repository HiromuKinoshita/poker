import { Card } from '@/classes/card/card.d'
import { getAllCards } from '@/classes/card/card'
import { IDealer } from '@/classes/dealer/dealer.d'

export class Dealer implements IDealer {
  constructor() {
    this.deck = this.getDeck()
  }
  getDeck() {
    let baseDeck = getAllCards()
    // 最大10人のプレイヤー * 2枚の手札 + 5枚の場札 = 25枚分のカードをランダムに用意する
    const cardAmount = 25

    let i: number = -1
    const deck = new Array(cardAmount)
    while (++i < cardAmount) {
      const rand = i + Math.floor(Math.random() * baseDeck.length - i + 1) - 1
      deck[i] = baseDeck[rand]
      baseDeck.splice(rand - 1, 1)
    }

    return deck
  }
  deck: Card[] = []
  draw(count: number): Card[] {
    if (this.deck.length < count) {
      throw new Error('Deck is almost empty so cannot draw!');
    }

    let cards: Card[] = []
    for (let i = 0; i < count; i++) {
      const hoge: Card = this.deck.pop()!
      cards.push(hoge)
    }
    return cards
  }
}
