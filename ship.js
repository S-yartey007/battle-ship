class Ship {
  constructor(length = 0, numberOfHits = 0, sunk = false) {
    this.length = length;
    this.numberOfHits = numberOfHits;
    this.sunk = sunk;
  }
  hit() {
    this.numberOfHits++;
  }

  isSunk() {
    if (ship.length >= ship.numberOfHits) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }
}

const ship = new Ship();

export { ship, Ship };
