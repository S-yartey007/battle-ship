class GameBoard {
  shipsSunked = false;
  constructor() {
    this.board = [[], [], [], [], [], [], [], [], [], []];
    this.board.forEach((row) => {
      for (let i = 0; i < 10; i++) {
        row.push("");
      }
    });
  }
  placeShip(coord, ship) {
    const [row, col] = coord;
    for (let i = 0; i < ship.length; i++) {
      this.board[row][col + i] = ship;
    }
  }
  recieveAttack(coord) {
    const [row, col] = coord;
    if (this.board[row][col]) {
      const ship = this.board[row][col];
      ship.hit();
      this.reportStatus();
      return true;
    } else {
      this.board[row][col] = false;
      this.reportStatus();
      return false;
    }
  }
  reportStatus() {
    let ships = [];
    this.board.forEach((row) => {
      for (let col of row) {
        if (col) {
          ships.push(col);
        }
      }
    });
    console.log(ships);
    this.shipsSunked = ships.every((ship) => ship.sunk === true);
  }
}

export { GameBoard };
