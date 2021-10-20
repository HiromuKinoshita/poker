import { Card, Suit, Num } from '@/classes/card/card.d'
import { IPlayer } from "@/classes/player/player.d";

export interface IDealer {
  draw(count: number): Card[],
  deck: Card[],
  getDeck(): Card[],
  judgeGame(players: IPlayer[]): { name: string; num: Num; },
  // handIs(hand: Card[], field: Card[]): string,
}
