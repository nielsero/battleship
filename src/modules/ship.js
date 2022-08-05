function createShip(length) {
  return {
    length,
    locations: [],
    hits: [],
  }
}

function hitShip(ship, location) {
  if (!isLocationInShip(ship, location)) return false
  if (isLocationAlreadyHit(ship, location)) return false
  ship.hits.push(location)
  return true
}

function isShipSunk(ship) {
  return ship.locations.length === ship.hits.length
}

function isLocationInShip(ship, location) {
  const locations = ship.locations.map((location) => location.toString())
  if (locations.includes(location.toString())) return true
}

function isLocationAlreadyHit(ship, location) {
  const hits = ship.hits.map((hit) => hit.toString())
  if (hits.includes(location.toString())) return true
}

export { createShip, hitShip, isShipSunk }
