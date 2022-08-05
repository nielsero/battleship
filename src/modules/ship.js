function createShip(length) {
  return {
    length,
    locations: [],
    hits: [],
  }
}

function hitShip(ship, location) {
  const locations = ship.locations.map((location) => location.toString())
  if (!locations.includes(location.toString())) return false

  const hits = ship.hits.map((hit) => hit.toString())
  if (hits.includes(location.toString())) return false

  ship.hits.push(location)
  return true
}

function isShipSunk(ship) {
  return ship.locations.length === ship.hits.length
}

export { createShip, hitShip, isShipSunk }
