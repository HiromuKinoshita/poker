export type Suit =
  | 'spade'
  | 'club'
  | 'heart'
  | 'diamond'

export type Color = 'black' | 'red'

export type Num =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14

export type Name =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'

export interface Card {
  suit: Suit
  color: Color
  num: Num
  name: Name
}
