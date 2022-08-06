import { attackPlayer, createPlayer, generateComputerMove } from "./player"

describe("createPlayer", () => {
  test("create a player w/ given name & gameboard", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const player = { name: "Niels", gameboard }
    expect(createPlayer("Niels", gameboard)).toEqual(player)
  })
})

describe("attackPlayer", () => {
  test("attack player & miss", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const player = { name: "Niels", gameboard }
    const attackCode = attackPlayer(player, [0, 1])
    expect(attackCode).toMatch("miss")
    expect(gameboard.missedLocations.length).toBe(1)
  })

  test("attack player & hit", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [],
    }
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [ship],
      missedLocations: [],
    }
    const player = { name: "Niels", gameboard }
    const attackCode = attackPlayer(player, [0, 1])
    expect(attackCode).toMatch("hit")
    expect(gameboard.missedLocations.length).toBe(0)
    expect(ship.hits.length).toBe(1)
  })
})

describe("generateComputerMove", () => {
  test("computer makes a move (hit or miss)", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [],
    }
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [ship],
      missedLocations: [],
    }
    const player = { name: "Niels", gameboard }
    const computerMove = generateComputerMove(player)
    const caseHit = computerMove === "hit" && ship.hits.length === 1
    const caseMiss =
      computerMove === "miss" && gameboard.missedLocations.length === 1
    expect(caseHit || caseMiss).toBeTruthy()
  })
})
