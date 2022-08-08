/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\nmain()\n\nfunction main() {\n  ;(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\nfunction game() {\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(\"Niels\", (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)(4, 4))\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(\"Computer\", (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)(4, 4))\n\n  const shipOne = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.createShip)(2)\n  const shipTwo = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.createShip)(3)\n\n  console.log(\"Placing ship 1\")\n  let out = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShipInGameboard)(player.gameboard, shipOne, [\n    [0, 0],\n    [0, 1],\n  ])\n  console.log(out)\n\n  console.log(\"Placing ship 2\")\n  out = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShipInGameboard)(computer.gameboard, shipTwo, [\n    [0, 0],\n    [0, 1],\n    [0, 2],\n  ])\n  console.log(out)\n\n  while (\n    !(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.areAllShipsSunk)(player.gameboard) &&\n    !(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.areAllShipsSunk)(computer.gameboard)\n  ) {\n    // while (true) {\n    //   const x = prompt(\"x: \")\n    //   const y = prompt(\"y: \")\n    //   const attackCode = attackPlayer(computer, [Number(x), Number(y)])\n    //   if (attackCode) {\n    //     console.log(`Player: ${attackCode}`)\n    //     break\n    //   }\n    // }\n    const x = prompt(\"x: \")\n    const y = prompt(\"y: \")\n    const attackCode = (0,_player__WEBPACK_IMPORTED_MODULE_1__.attackPlayer)(computer, [Number(x), Number(y)])\n    console.log(`Player: ${attackCode}`)\n    const computerMove = (0,_player__WEBPACK_IMPORTED_MODULE_1__.generateComputerMove)(player)\n    console.log(`Computer: ${computerMove}`)\n  }\n  console.log(\"Game Over\")\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"areAllShipsSunk\": () => (/* binding */ areAllShipsSunk),\n/* harmony export */   \"attackGameboard\": () => (/* binding */ attackGameboard),\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard),\n/* harmony export */   \"placeShipInGameboard\": () => (/* binding */ placeShipInGameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nfunction createGameboard(rows, columns) {\n  return {\n    rows,\n    columns,\n    ships: [],\n    missedLocations: [],\n  }\n}\n\nfunction placeShipInGameboard(gameboard, ship, locations) {\n  if (locations.length !== ship.length) return false\n  if (!areLocationsInBoard(gameboard, locations)) return false\n  if (!areLocationsUnique(locations)) return false\n  if (areLocationsOccupiedInBoard(gameboard, locations)) return false\n  if (!areLocationsContiguos(locations)) return false\n  ship.locations.push(...locations)\n  gameboard.ships.push(ship)\n  return true\n}\n\nfunction attackGameboard(gameboard, location) {\n  if (!isLocationInBoard(gameboard, location)) return false\n  if (isLocationAlreadyMissedInBoard(gameboard, location)) return false\n  if (isLocationAlreadyHitInBoard(gameboard, location)) return false\n  const isSomeShipHit = gameboard.ships.some((ship) => (0,_ship__WEBPACK_IMPORTED_MODULE_0__.hitShip)(ship, location))\n  if (isSomeShipHit) return \"hit\"\n  gameboard.missedLocations.push(location)\n  return \"miss\"\n}\n\nfunction areAllShipsSunk(gameboard) {\n  return gameboard.ships.every((ship) => {\n    return (0,_ship__WEBPACK_IMPORTED_MODULE_0__.isShipSunk)(ship)\n  })\n}\n\nfunction areLocationsInBoard(gameboard, locations) {\n  const validLocations = locations.filter((location) => {\n    return isLocationInBoard(gameboard, location)\n  })\n  return validLocations.length === locations.length\n}\n\nfunction isLocationInBoard(gameboard, location) {\n  if (location[0] < 0 || location[1] < 0) return false\n  if (location[0] >= gameboard.rows || location[1] >= gameboard.columns)\n    return false\n  return true\n}\n\nfunction areLocationsContiguos(locations) {\n  if (!hasSameRows(locations) && !hasSameColumns(locations)) return false\n  if (!areLocationsSideBySide(locations)) return false\n  return true\n}\n\nfunction hasSameRows(locations) {\n  const firstRow = locations[0][0]\n  return locations.every((location) => location[0] === firstRow)\n}\n\nfunction hasSameColumns(locations) {\n  const firstColumn = locations[0][1]\n  return locations.every((location) => location[1] === firstColumn)\n}\n\nfunction areLocationsSideBySide(locations) {\n  if (hasSameRows(locations)) {\n    const columns = locations.map((location) => location[1])\n    const sum = columns.reduce((prev, cur) => prev + cur, 0)\n    return sum === getArithmeticSeriesSum(columns)\n  }\n  if (hasSameColumns(locations)) {\n    const rows = locations.map((location) => location[0])\n    const sum = rows.reduce((prev, cur) => prev + cur, 0)\n    return sum === getArithmeticSeriesSum(rows)\n  }\n  return false\n}\n\nfunction getArithmeticSeriesSum(array) {\n  const min = Math.min(...array) // we have to destructure first (see min, max docs)\n  const max = Math.max(...array)\n  return ((min + max) * array.length) / 2 // math has a purpose???\n}\n\nfunction areLocationsUnique(locations) {\n  const locationsSet = new Set(locations.map((location) => location.toString()))\n  return locationsSet.size === locations.length\n}\n\nfunction areLocationsOccupiedInBoard(gameboard, locations) {\n  return locations.some((location) =>\n    isLocationOccupiedInBoard(gameboard, location)\n  )\n}\n\nfunction isLocationOccupiedInBoard(gameboard, location) {\n  return gameboard.ships.some((ship) => {\n    return ship.locations.some((loc) => loc.toString() === location.toString())\n  })\n}\n\nfunction isLocationAlreadyMissedInBoard(gameboard, location) {\n  return gameboard.missedLocations.some((missedLocation) => {\n    return missedLocation.toString() === location.toString()\n  })\n}\n\nfunction isLocationAlreadyHitInBoard(gameboard, location) {\n  return gameboard.ships.some((ship) => {\n    return ship.hits.some((hit) => hit.toString() === location.toString())\n  })\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attackPlayer\": () => (/* binding */ attackPlayer),\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer),\n/* harmony export */   \"generateComputerMove\": () => (/* binding */ generateComputerMove)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\nfunction createPlayer(name, gameboard) {\n  return { name, gameboard }\n}\n\nfunction attackPlayer(player, location) {\n  return (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.attackGameboard)(player.gameboard, location)\n}\n\nfunction generateComputerMove(player) {\n  while (true) {\n    const x = generateRandom(player.gameboard.rows)\n    const y = generateRandom(player.gameboard.columns)\n    const attackCode = attackPlayer(player, [x, y])\n    if (attackCode === \"hit\" || attackCode === \"miss\") return attackCode\n  }\n}\n\nfunction generateRandom(number) {\n  return Math.floor(Math.random() * number)\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip),\n/* harmony export */   \"hitShip\": () => (/* binding */ hitShip),\n/* harmony export */   \"isShipSunk\": () => (/* binding */ isShipSunk)\n/* harmony export */ });\nfunction createShip(length) {\n  return {\n    length,\n    locations: [],\n    hits: [],\n  }\n}\n\nfunction hitShip(ship, location) {\n  if (!isLocationInShip(ship, location)) return false\n  if (isLocationAlreadyHit(ship, location)) return false\n  ship.hits.push(location)\n  return true\n}\n\nfunction isShipSunk(ship) {\n  return ship.locations.length === ship.hits.length\n}\n\nfunction isLocationInShip(ship, location) {\n  const locations = ship.locations.map((location) => location.toString())\n  if (locations.includes(location.toString())) return true\n}\n\nfunction isLocationAlreadyHit(ship, location) {\n  const hits = ship.hits.map((hit) => hit.toString())\n  if (hits.includes(location.toString())) return true\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;