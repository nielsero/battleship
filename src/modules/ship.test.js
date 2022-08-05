import Ship from "./ship"

test("create a ship", () => {
  const ship = new Ship(2)
  expect(ship).toEqual({ length: 2, hits: [] })
})

test("hit a ship", () => {
  const ship = new Ship(2)
  ship.hit(0)
  expect(ship.hits.includes(0)).toBeTruthy()
})

test("ship is sunk", () => {
  const ship = new Ship(2)
  ship.hits = [0, 1]
  expect(ship.isSunk()).toBeTruthy()
})
