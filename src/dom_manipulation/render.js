export { renderInitialPlayerGameboard, renderInitialComputerGameboard }

const playerGameboardContainer = document.querySelector(
  ".player-gameboard-container"
)
const computerGameboardContainer = document.querySelector(
  ".computer-gameboard-container"
)

function renderInitialGameboard(container, gameboard) {
  gameboard.ships.forEach((ship) => {
    ship.locations.forEach((location) => {
      const cell = container.querySelector(
        `[data-location="${location.toString()}"]`
      )
      cell.classList.add("ship")
    })
  })
}

function renderInitialPlayerGameboard(player) {
  renderInitialGameboard(playerGameboardContainer, player.gameboard)
}

function renderInitialComputerGameboard(computer) {
  renderInitialGameboard(computerGameboardContainer, computer.gameboard)
}
