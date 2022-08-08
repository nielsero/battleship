import cleanContainer from "./util"
import {
  playerGameboardContainer,
  computerGameboardContainer,
} from "./elements"

export { loadNewPlayerGameboard, loadNewComputerGameboard }

function createGameboardElement() {
  const gameboard = document.createElement("div")
  gameboard.classList.add("gameboard")
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell")
      cell.dataset.location = [i, j].toString()
      gameboard.appendChild(cell)
    }
  }
  return gameboard
}

function loadNewPlayerGameboard() {
  cleanContainer(playerGameboardContainer)
  playerGameboardContainer.appendChild(createGameboardElement())
}

function loadNewComputerGameboard() {
  cleanContainer(computerGameboardContainer)
  computerGameboardContainer.appendChild(createGameboardElement())
}
