import { createShip, hitShip, isShipSunk } from "./ship"

describe("createShip", () => {
  test("create ship w/ given length", () => {
    const ship = { length: 2, locations: [], hits: [] }
    expect(createShip(2)).toEqual(ship)
  })
})

describe("hitShip", () => {
  test("hit valid location of ship", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [],
    }
    hitShip(ship, [0, 0])
    expect(ship.hits.length).toBe(1)
  })

  test("ignore invalid location", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [],
    }
    hitShip(ship, [0, 2])
    expect(ship.hits.length).toBe(0)
  })

  test("ignore re-hits (hits on same location)", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [],
    }
    hitShip(ship, [0, 0])
    hitShip(ship, [0, 0])
    expect(ship.hits.length).toBe(1)
  })
})

describe("isShipSunk", () => {
  test("ship is sunk", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [
        [0, 0],
        [0, 1],
      ],
    }
    expect(isShipSunk(ship)).toBeTruthy()
  })

  test("ship is not sunk", () => {
    const ship = {
      length: 2,
      locations: [
        [0, 0],
        [0, 1],
      ],
      hits: [[0, 0]],
    }
    expect(isShipSunk(ship)).toBeFalsy()
  })
})