import { hitShip, isShipSunk } from "./ship"

function createGameboard(rows, columns) {
  return {
    rows,
    columns,
    ships: [],
    missedLocations: [],
  }
}

function placeShipInGameboard(gameboard, ship, locations) {
  if (locations.length !== ship.length) return false
  if (!areLocationsInBoard(gameboard, locations)) return false
  if (!areLocationsUnique(locations)) return false
  if (areLocationsOccupiedInBoard(gameboard, locations)) return false
  if (!areLocationsContiguos(locations)) return false
  ship.locations.push(...locations)
  gameboard.ships.push(ship)
  return true
}

function attackGameboard(gameboard, location) {
  if (!isLocationInBoard(gameboard, location)) return false
  if (isLocationAlreadyMissedInBoard(gameboard, location)) return false
  if (isLocationAlreadyHitInBoard(gameboard, location)) return false
  const isSomeShipHit = gameboard.ships.some((ship) => hitShip(ship, location))
  if (isSomeShipHit) return true
  gameboard.missedLocations.push(location)
  return false
}

function areAllShipsSunk(gameboard) {
  return gameboard.ships.every((ship) => {
    return isShipSunk(ship)
  })
}

function areLocationsInBoard(gameboard, locations) {
  const validLocations = locations.filter((location) => {
    return isLocationInBoard(gameboard, location)
  })
  return validLocations.length === locations.length
}

function isLocationInBoard(gameboard, location) {
  if (location[0] < 0 || location[1] < 0) return false
  if (location[0] >= gameboard.rows || location[1] >= gameboard.columns)
    return false
  return true
}

function areLocationsContiguos(locations) {
  if (!hasSameRows(locations) && !hasSameColumns(locations)) return false
  if (!areLocationsSideBySide(locations)) return false
  return true
}

function hasSameRows(locations) {
  const firstRow = locations[0][0]
  return locations.every((location) => location[0] === firstRow)
}

function hasSameColumns(locations) {
  const firstColumn = locations[0][1]
  return locations.every((location) => location[1] === firstColumn)
}

function areLocationsSideBySide(locations) {
  if (hasSameRows(locations)) {
    const columns = locations.map((location) => location[1])
    const sum = columns.reduce((prev, cur) => prev + cur, 0)
    return sum === getArithmeticSeriesSum(columns)
  }
  if (hasSameColumns(locations)) {
    const rows = locations.map((location) => location[0])
    const sum = rows.reduce((prev, cur) => prev + cur, 0)
    return sum === getArithmeticSeriesSum(rows)
  }
  return false
}

function getArithmeticSeriesSum(array) {
  const min = Math.min(...array) // we have to destructure first (see min, max docs)
  const max = Math.max(...array)
  return ((min + max) * array.length) / 2 // math has a purpose???
}

function areLocationsUnique(locations) {
  const locationsSet = new Set(locations.map((location) => location.toString()))
  return locationsSet.size === locations.length
}

function areLocationsOccupiedInBoard(gameboard, locations) {
  return locations.some((location) =>
    isLocationOccupiedInBoard(gameboard, location)
  )
}

function isLocationOccupiedInBoard(gameboard, location) {
  return gameboard.ships.some((ship) => {
    return ship.locations.some((loc) => loc.toString() === location.toString())
  })
}

function isLocationAlreadyMissedInBoard(gameboard, location) {
  return gameboard.missedLocations.some((missedLocation) => {
    return missedLocation.toString() === location.toString()
  })
}

function isLocationAlreadyHitInBoard(gameboard, location) {
  return gameboard.ships.some((ship) => {
    return ship.hits.some((hit) => hit.toString() === location.toString())
  })
}

export {
  createGameboard,
  placeShipInGameboard,
  attackGameboard,
  areAllShipsSunk,
}
