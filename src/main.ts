import { Card } from "./classes/card/card.d"
import { Dealer } from "./classes/dealer/dealer"
import { Player } from "./classes/player/player";

function StargGame(): void {
  console.log('welcome to the game!');
  const dealer = new Dealer()
  console.log(dealer.deck);

  const playerA: Player = new Player('john')
  const playerB: Player = new Player('maria')
  playerA.hand = dealer.draw(2)
  playerB.hand = dealer.draw(2)
  let field: Card[] = dealer.draw(5)

  console.log('now game begin!');
  console.log(playerA);
  console.log(playerB);
  // console.log(field);
  const winner = dealer.judgeGame([playerA, playerB])
  console.log(`${winner.name}'s win!!`);
  // console.log(dealer.deck);
}

StargGame()
console.log('done!');
