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
  // TODO: カードを都度引いていく式にした場合letで。
  const field: Card[] = dealer.draw(5)

  console.log('now game begin!');
  console.log(playerA);
  console.log(playerB);
  console.log(field);
  const winners = dealer.judgeGame([playerA, playerB], field)
  const resultMessage = winners.length < 2
    ? `${winners[0].name} wins!!`
    // TODO: 最後の ,はandに置き換えたい
    : `${winners.map(winner => winner.name).toString().replace(',', ' ,')} draw...`
  console.log(resultMessage);
  // console.log(dealer.deck);
}

StargGame()
console.log('done!');
