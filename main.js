import { UserInterface } from "./userInterface.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";

const GameController = (function () {
  const playerTurns = [];
  function startGame() {
    const player = new Player("player");
    const battleship = new Ship(5);
    const carrier = new Ship(4);
    const cruiser = new Ship(3);
    const airship = new Ship(4);
    player.gameBoard.placeShip([0, 1], battleship);
    player.gameBoard.placeShip([1, 2], carrier);
    const computer = new Player("computer");
    computer.gameBoard.placeShip([0, 1], cruiser);
    computer.gameBoard.placeShip([1, 2], airship);

    const userInterface = new UserInterface(player, computer);
  }

  function playerTurn(next) {
    const nextTurn = next;
    return nextTurn;
  }

  return {
    startGame,
    playerTurn,
  };
})();

GameController.startGame();
export { GameController };
