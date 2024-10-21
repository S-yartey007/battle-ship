import { Ship } from "./ship.js";

test("is ship available", () => {
  const ship = new Ship();
  expect(ship).toBeInstanceOf(Ship);
});

test("length of ship", () => {
  const ship = new Ship();
  expect(ship.length).toBeDefined();
});

test("number of times ship is hit ", () => {
  const ship = new Ship();
  expect(ship.numberOfHits).toBeDefined();
});

test("has ship sunk ", () => {
  const ship = new Ship();
  expect(ship.sunk).toBeDefined();
});

test("is hit method of ship availble", () => {
  const ship = new Ship();
  expect(ship.hit).toBeDefined();
});

test("hit implementation", () => {
  const ship = new Ship();
  const numberOfHits = ship.numberOfHits + 1;
  ship.hit();
  expect(numberOfHits).toBe(ship.numberOfHits);
});

test("is ship sunk method available", () => {
  const ship = new Ship();
  expect(ship.isSunk).toBeDefined();
});

test("check ship sunk", () => {
  const ship = new Ship();
  if (ship.numberOfHits >= ship.length) {
    expect(ship.sunk).toBe(true);
  }
});

test("check ship not sunk", () => {
  const ship = new Ship();
  if (ship.numberOfHits < ship.length) {
    expect(ship.sunk).toBe(false);
  }
});
