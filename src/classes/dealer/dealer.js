"use strict";
exports.__esModule = true;
exports.Dealer = void 0;
var card_1 = require("@/classes/card/card");
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.deck = [];
        this.deck = this.getDeck();
    }
    Dealer.prototype.getDeck = function () {
        var baseDeck = card_1.getAllCards();
        var len = baseDeck.length;
        // 最大10人のプレイヤー * 2枚の手札 + 5枚の場札 = 25枚分のカードをランダムに用意する
        var cardAmount = 25;
        var i = -1;
        var lastIndex = len - 1;
        var result = new Array(cardAmount);
        while (++i < cardAmount) {
            var rand = i + Math.floor(Math.random() * (lastIndex - i + 1));
            var value = result[rand];
            result[rand] = result[i];
            result[i] = value;
        }
        return baseDeck;
    };
    Dealer.prototype.draw = function (count) {
        if (this.deck.length < count) {
            throw new Error('Deck is almost empty so cannot draw!');
        }
        var cards = [];
        for (var i = 0; i < count; i++) {
            // cards.push(this.hoge(this.deck))
            cards.push(this.deck.pop());
        }
        return cards;
    };
    return Dealer;
}());
exports.Dealer = Dealer;
