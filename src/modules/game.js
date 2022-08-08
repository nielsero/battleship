import {
  areAllShipsSunk,
  createGameboard,
  placeShipInGameboard,
} from "./gameboard"
import { attackPlayer, createPlayer, generateComputerMove } from "./player"
import { createShip } from "./ship"

function game() {
  const player = createPlayer("Niels", createGameboard(4, 4))
  const computer = createPlayer("Computer", createGameboard(4, 4))

  const shipOne = createShip(2)
  const shipTwo = createShip(3)

  console.log("Placing ship 1")
  placeShipInGameboard(player.gameboard, shipOne, [
    [0, 0],
    [0, 1],
  ])

  console.log("Placing ship 2")
  placeShipInGameboard(computer.gameboard, shipTwo, [
    [0, 0],
    [0, 1],
    [0, 2],
  ])

  while (
    !areAllShipsSunk(player.gameboard) &&
    !areAllShipsSunk(computer.gameboard)
  ) {
    while (true) {
      const x = prompt("x: ")
      const y = prompt("y: ")
      const attackCode = attackPlayer(computer, [Number(x), Number(y)])
      if (attackCode) {
        console.log("Player")
        console.table(attackCode)
        break
      }
      console.log("Invalid location, try again")
    }
    const computerMove = generateComputerMove(player)
    console.log("Computer")
    console.table(computerMove)
  }
  console.log("Game Over")
}

export default game
