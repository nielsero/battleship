import { bindComputerCellsEventListeners } from "../dom_manipulation/bindEventListeners"
import { renderInitialComputerGameboard } from "../dom_manipulation/render"
import {
  // areAllShipsSunk,
  createGameboard,
  placeShipInGameboard,
} from "./gameboard"
import {
  /* attackPlayer, */ createPlayer /* generateComputerMove */,
} from "./player"
import { createShip } from "./ship"

function game() {
  // const player = createPlayer("Niels", createGameboard(8, 8))
  const computer = createPlayer("Computer", createGameboard(8, 8))

  const shipOne = createShip(2)
  const shipTwo = createShip(3)
  const shipThree = createShip(4)

  console.log("Placing ship 1")
  placeShipInGameboard(computer.gameboard, shipOne, [
    [0, 0],
    [0, 1],
  ])

  console.log("Placing ship 2")
  placeShipInGameboard(computer.gameboard, shipTwo, [
    [1, 0],
    [1, 1],
    [1, 2],
  ])

  console.log("Placing ship 3")
  placeShipInGameboard(computer.gameboard, shipThree, [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
  ])

  renderInitialComputerGameboard(computer)
  bindComputerCellsEventListeners(computer)
}

export default game
