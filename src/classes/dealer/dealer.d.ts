import { Card, Suit, Num } from '@/classes/card/card.d'

export interface IDealer {
  draw(count: number): Card[],
  deck: Card[],
  getDeck(): Card[],
}
