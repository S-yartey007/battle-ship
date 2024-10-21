class Ship {
  constructor(length = 0, numberOfHits = 0, sunk = false) {
    this.length = length;
    this.numberOfHits = numberOfHits;
    this.sunk = sunk;
    this.isSunk();
  }
  hit() {
    this.numberOfHits++;
    this.isSunk();
  }

  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
    } else if (this.numberOfHits < this.length) {
      this.sunk = false;
    }
  }
}

export { Ship };
