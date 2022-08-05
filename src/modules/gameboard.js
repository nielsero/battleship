function createGameboard(rows, columns) {
  return {
    rows,
    columns,
    ships: [],
    missedLocations: [],
  }
}

function placeShipInGameboard(gameboard, ship, locations) {
  if (!areLocationsValid(gameboard, locations)) return
  ship.locations = [...ship.locations, ...locations]
  gameboard.ships = [...gameboard.ships, ship]
}

function areLocationsValid(gameboard, locations) {
  const validLocations = locations.filter((location) => {
    return isLocationValid(gameboard, location)
  })
  return validLocations.length === locations.length
}

function isLocationValid(gameboard, location) {
  if (location[0] < 0 || location[1] < 0) return false
  if (location[0] >= gameboard.rows || location[1] >= gameboard.columns)
    return false
  return true
}

export { createGameboard, placeShipInGameboard }