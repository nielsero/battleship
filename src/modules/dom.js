const playerGameboardContainer = document.querySelector(
  ".player-gameboard-container"
)
const computerGameboardContainer = document.querySelector(
  ".computer-gameboard-container"
)

function addNewPlayerGameboard() {
  cleanContainer(playerGameboardContainer)
  playerGameboardContainer.appendChild(createGameboard())
}

function addNewComputerGameboard() {
  cleanContainer(computerGameboardContainer)
  computerGameboardContainer.appendChild(createGameboard())
}

function createGameboard() {
  const gameboard = document.createElement("div")
  gameboard.classList.add("gameboard")
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell")
      cell.dataset.x = i
      cell.dataset.y = j
      gameboard.appendChild(cell)
    }
  }
  return gameboard
}

function cleanContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

export { addNewPlayerGameboard, addNewComputerGameboard }
