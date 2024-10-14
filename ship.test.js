import { ship, Ship } from "./ship.js";

test("is ship available", () => {
  expect(ship).toBeInstanceOf(Ship);
});

test("length of ship", () => {
  expect(ship.length).toBeDefined();
});

test("number of times ship is hit ", () => {
  expect(ship.numberOfHits).toBeDefined();
});

test("has ship sunk ", () => {
  expect(ship.sunk).toBeDefined();
});

test("is hit method of ship availble", () => {
  expect(ship.hit).toBeDefined();
});

test("hit implementation", () => {
  const numberOfHits = ship.numberOfHits + 1;
  ship.hit();
  expect(numberOfHits).toBe(ship.numberOfHits);
});

test("is ship sunk method available", () => {
  expect(ship.isSunk).toBeDefined();
});

test("check ship sunk", () => {
  if (ship.length === ship.numberOfHits) {
    expect(ship.sunk).toBe(true);
  }
});

test("check ship not sunk", () => {
  if (ship.length !== ship.numberOfHits) {
    expect(ship.sunk).toBe(false);
  }
});
