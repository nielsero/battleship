import {
  attackGameboard,
  createGameboard,
  placeShipInGameboard,
} from "./gameboard"

describe("createGameboard", () => {
  test("create gameboard w/ given rows & columns", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    expect(createGameboard(4, 4)).toEqual(gameboard)
  })
})

describe("placeShipInGameboard", () => {
  test("places a ship in valid locations", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const ship = { length: 2, locations: [], hits: [] }
    const locations = [
      [0, 0],
      [0, 1],
    ]
    placeShipInGameboard(gameboard, ship, locations)
    expect(ship.locations.length).toBe(2)
    expect(gameboard.ships.length).toBe(1)
  })

  test("ignore placing ship in non existing locations", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const ship = { length: 2, locations: [], hits: [] }
    const locations = [
      [4, 4],
      [4, 5],
    ]
    placeShipInGameboard(gameboard, ship, locations)
    expect(ship.locations.length).toBe(0)
    expect(gameboard.ships.length).toBe(0)
  })

  test("ignore placing ship if at least one location is invalid", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const ship = { length: 2, locations: [], hits: [] }
    const locations = [
      [0, 0],
      [4, 5],
    ]
    placeShipInGameboard(gameboard, ship, locations)
    expect(ship.locations.length).toBe(0)
    expect(gameboard.ships.length).toBe(0)
  })

  test("ignore placing ship if number of locations don't match length of ship", () => {
    const gameboard = { rows: 4, columns: 4, ships: [], missedLocations: [] }
    const ship = { length: 1, locations: [], hits: [] }
    const locations = [
      [0, 0],
      [0, 1],
    ]
    placeShipInGameboard(gameboard, ship, locations)
    expect(ship.locations.length).toBe(0)
    expect(gameboard.ships.length).toBe(0)
  })
})
