import { GameBoard } from "./gameBoard.js";

class Player {
  constructor(type) {
    this.type = type;
    this.gameBoard = new GameBoard();
  }
}
export { Player };
