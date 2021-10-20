import { IPlayer } from '@/classes/player/player.d'
import { Card } from '@/classes/card/card.d'

export class Player implements IPlayer {
  constructor(name: string) {
    this.name = name
  }
  name: string = ''
  hand: Card[] = []
}
