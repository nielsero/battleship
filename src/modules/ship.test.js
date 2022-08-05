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

test("invalid position doesn't hit", () => {
  const ship = new Ship(2)
  ship.hit(2)
  expect(ship.hits.includes(2)).not.toBeTruthy()
})

test("re-hit positions count only once", () => {
  const ship = new Ship(2)
  ship.hit(0)
  ship.hit(0)
  expect(ship.hits.length).toBe(1)
})
