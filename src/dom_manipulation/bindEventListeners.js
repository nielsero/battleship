import { attackPlayer } from "../game_logic/player"
import { computerGameboardContainer } from "./elements"
import { renderComputerCell } from "./render"

export { bindComputerCellsEventListeners }

function bindComputerCellsEventListeners(computer) {
  const cells = computerGameboardContainer.querySelectorAll(".cell")

  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => handleCellClick(event, computer))
  })
}

function handleCellClick(event, computer) {
  const locationString = event.target.dataset.location.split(",")
  const location = locationString.map((location) => Number(location))

  const code = attackPlayer(computer, location)
  renderComputerCell(code)
}
