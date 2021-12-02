export default interface GamePlay {
  history: Array<{ squares: Array<'X' | 'O' | null >}>;
  xIsTheNextPlayer: boolean;
  stepNumber: number;
}