export default interface BoardProps {
  height: number;
  squares: Array<'X' | 'O' | null>;
  onSquareClick: (i: number) => void;
}