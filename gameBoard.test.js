import { GameBoard } from "./gameBoard.js";
import { Ship } from "./ship.js";

const testGameBoard = new GameBoard();
const battelShip = new Ship(1);
const carrier = new Ship(1);
const cruiseer = new Ship(1);
const destroyer = new Ship();
const submarine = new Ship(1);

test("does gameBoard exist", () => {
  expect(testGameBoard).toBeInstanceOf(GameBoard);
});

test("does gameBoard interface exist", () => {
  expect(testGameBoard.board).toBeDefined();
});

test("gameBoard interface column length", () => {
  testGameBoard.board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test("gameBoard interface row length", () => {
  expect(testGameBoard.board.length).toBe(10);
});

test("does place ship method exist", () => {
  expect(testGameBoard.placeShip).toBeDefined();
});

test("place ships on the board", () => {
  testGameBoard.placeShip([0, 1], submarine);
  testGameBoard.placeShip([2, 1], battelShip);
  expect(testGameBoard.board[0][1]).toEqual(submarine);
  expect(testGameBoard.board[2][1]).toEqual(battelShip);
});

test("does recieveAttack method exist", () => {
  expect(testGameBoard.recieveAttack).toBeDefined();
});

test("can ship recieve attacks", () => {
  testGameBoard.recieveAttack([0, 1]);
  testGameBoard.recieveAttack([2, 1]);
  testGameBoard.recieveAttack([4, 5]);
  expect(submarine.numberOfHits).toBe(1);
  expect(battelShip.numberOfHits).toBe(1);
  expect(testGameBoard.board[4][5]).toBe(false);
});

test("is report status method available", () => {
  expect(testGameBoard.reportStatus).toBeDefined();
});

test("report gameboard status", () => {
  const status = new GameBoard();
  status.placeShip([0, 1], carrier);
  status.placeShip([2, 1], cruiseer);
  status.recieveAttack([0, 1]);
  status.recieveAttack([2, 1]);
  status.recieveAttack([0, 1]);
  status.recieveAttack([2, 1]);
  // expect(status.reportStatus()).toEqual({ shipsSunked: true });
});
