import {
  areAllShipsSunk,
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
    const isPlaced = placeShipInGameboard(gameboard, ship, locations)
    expect(isPlaced).toBeTruthy()
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
    const isPlaced = placeShipInGameboard(gameboard, ship, locations)
    expect(isPlaced).toBeFalsy()
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
    const isPlaced = placeShipInGameboard(gameboard, ship, locations)
    expect(isPlaced).toBeFalsy()
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
    const isPlaced = placeShipInGameboard(gameboard, ship, locations)
    expect(isPlaced).toBeFalsy()
    expect(ship.locations.length).toBe(0)
    expect(gameboard.ships.length).toBe(0)
  })

  test("place ships in contiguos locations", () => {})

  test("ignore placing ship if locations are not contiguos", () => {})
})

describe("attackGameboard", () => {
  test("attack empty location", () => {
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [],
      missedLocations: [],
    }
    const isAttacked = attackGameboard(gameboard, [0, 1])
    expect(isAttacked).toBeFalsy()
    expect(gameboard.missedLocations.length).toBe(1)
  })

  test("attack & hit a ship", () => {
    const ship = { length: 1, locations: [[0, 0]], hits: [] }
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [ship],
      missedLocations: [],
    }
    const isAttacked = attackGameboard(gameboard, [0, 0])
    expect(isAttacked).toBeTruthy()
    expect(gameboard.missedLocations.length).toBe(0)
    expect(ship.hits.length).toBe(1)
  })

  test("ignore attack in invalid location", () => {
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [],
      missedLocations: [],
    }
    const isAttacked = attackGameboard(gameboard, [4, 4])
    expect(isAttacked).toBeFalsy()
    expect(gameboard.missedLocations.length).toBe(0)
  })
})

describe("areAllShipsSunk", () => {
  test("all ships sunk", () => {
    const ship1 = { length: 1, locations: [[0, 0]], hits: [[0, 0]] }
    const ship2 = { length: 1, locations: [[3, 3]], hits: [[3, 3]] }
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [ship1, ship2],
      missedLocations: [],
    }
    expect(areAllShipsSunk(gameboard)).toBeTruthy()
  })

  test("some ships are still alive", () => {
    const ship1 = {
      length: 1,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [[0, 0]],
    }
    const ship2 = { length: 1, locations: [[3, 3]], hits: [[3, 3]] }
    const gameboard = {
      rows: 4,
      columns: 4,
      ships: [ship1, ship2],
      missedLocations: [],
    }
    expect(areAllShipsSunk(gameboard)).toBeFalsy()
  })
})
