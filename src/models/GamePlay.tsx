export default interface GamePlay {
  squares: Array<'X' | 'O' | null>;
  xIsTheNextPlayer: boolean;
}