import { Card } from "./classes/card/card.d"
import { Dealer } from "./classes/dealer/dealer"

function StargGame(): void {
  console.log('welcome to the game!');
  const dealer = new Dealer()
  console.log(dealer.deck);

  let playerA: Card[] = []
  let playerB: Card[] = []
  let playerC: Card[] = []
  let playerD: Card[] = []
  let playerE: Card[] = []
  // TODO: 要修正
  playerA = dealer.draw(2)
  playerB = dealer.draw(2)
  playerC = dealer.draw(2)
  playerD = dealer.draw(2)
  playerE = dealer.draw(2)

  console.log('now game begin!');
  console.log(dealer.deck);
}

StargGame()
console.log('done!');
