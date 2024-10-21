import { GameController } from "./main.js";

class UserInterface {
  playerTurns = ["player"];

  constructor(player, computer) {
    this.mainInterface = document.querySelector("main");
    this.header = document.querySelector("header");
    this.status = document.querySelector("section");
    this.playerInterface = this.mainInterface.querySelector(".player-1");
    this.computerInterface = this.mainInterface.querySelector(".player-2");
    this.player = player;
    this.computer = computer;
    this.renderGameBoard(this.playerInterface);
    this.renderGameBoard(this.computerInterface);
    this.addEvents();
    this.renderTurn("player");
    this.renderStatus(this.player);
  }

  renderGameBoard(playerInterface) {
    const width =
      Number(getComputedStyle(playerInterface).width.slice(0, 3)) / 10;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const track = document.createElement("div");
        track.classList.add("track");
        track.style.width = `${width}px`;
        track.style.height = `${width}px`;
        track.dataset.index = `${i}${j}`;
        playerInterface.appendChild(track);
      }
    }
  }

  renderTrack(playerName, coord, target) {
    let [row, col] = coord;
    row = Number(row);
    col = Number(col);
    console.log(row, col);
    if (playerName === "player-1") {
      let atkRecieved = this.player.gameBoard.recieveAttack(coord);
      if (atkRecieved) {
        target.innerHTML = `<h3>X</h3>`;
      } else {
        target.innerText = `${this.player.gameBoard.board[row][col]}`;
      }
      this.renderStatus(this.player);
      this.renderTurn(GameController.playerTurn(this.computer.type));
    } else if (playerName === "player-2") {
      let atkRecieved = this.computer.gameBoard.recieveAttack(coord);
      if (atkRecieved) {
        target.innerHTML = `<h3>X</h3>`;
      } else {
        target.innerText = `${this.computer.gameBoard.board[row][col]}`;
      }
      this.renderStatus(this.computer);
      this.renderTurn(GameController.playerTurn(this.player.type));
    }
  }

  renderTurn(player) {
    this.header.replaceChildren();
    const playerTurn = document.createElement("h2");
    playerTurn.textContent = `who's turn to shoot: ${player}`;
    this.header.appendChild(playerTurn);
  }

  renderStatus(player) {
    this.status.replaceChildren();
    const shipsStatus = document.createElement("p");
    shipsStatus.textContent = `${player.type} Ships sunk: ${player.gameBoard.shipsSunked}`;
    this.status.appendChild(shipsStatus);
  }
  addEvents() {
    [this.playerInterface, this.computerInterface].forEach((player) => {
      player.addEventListener("click", this.handleClick.bind(this));
    });
  }

  handleClick(e) {
    if (e.target.classList.contains("track")) {
      const coord = e.target.dataset.index.split("");
      const parentElement = e.target.parentElement.className;
      this.renderTrack(parentElement, coord, e.target);
    }
  }
}

export { UserInterface };
