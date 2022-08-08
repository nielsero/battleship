import { attackGameboard } from "./gameboard"

function createPlayer(name, gameboard) {
  return { name, gameboard }
}

function attackPlayer(player, location) {
  return attackGameboard(player.gameboard, location)
}

function generateComputerMove(player) {
  while (true) {
    const x = generateRandom(player.gameboard.rows)
    const y = generateRandom(player.gameboard.columns)
    const attackCode = attackPlayer(player, [x, y])
    if (attackCode.result === "hit" || attackCode.result === "miss")
      return attackCode
  }
}

function generateRandom(number) {
  return Math.floor(Math.random() * number)
}

export { createPlayer, attackPlayer, generateComputerMove }
