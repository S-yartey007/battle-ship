import { Player } from "./player.js";

test("does player exist", () => {
  const player = new Player();
  expect(player).toBeInstanceOf(Player);
});

test("does player type exist", () => {
  const player = new Player("player");
  expect(player.type).toBe("player");
});

test("does computer type exist", () => {
  const computer = new Player("Computer");
  expect(computer.type).toBe("Computer");
});

test("does gameBoard exist for each player", () => {
  const player = new Player("player");
  expect(player.gameBoard).toBeDefined();
});
