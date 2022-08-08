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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.header {\\n  text-align: center;\\n}\\n\\n.main {\\n  display: flex;\\n  justify-content: center;\\n  column-gap: 20px;\\n  margin-top: 20px;\\n}\\n\\n.gameboard {\\n  display: grid;\\n  grid-template-columns: repeat(8, 50px);\\n}\\n\\n.cell {\\n  height: 50px;\\n  background-color: black;\\n  border: 1px solid white;\\n}\\n\\n.ship {\\n  background-color: aqua;\\n}\\n\\n.hit {\\n  background-color: red;\\n}\\n\\n.miss {\\n  background-color: green;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom_manipulation/bindEventListeners.js":
/*!****************************************************!*\
  !*** ./src/dom_manipulation/bindEventListeners.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bindComputerCellsEventListeners\": () => (/* binding */ bindComputerCellsEventListeners)\n/* harmony export */ });\n/* harmony import */ var _game_logic_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game_logic/player */ \"./src/game_logic/player.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/dom_manipulation/elements.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/dom_manipulation/render.js\");\n\n\n\n\n\n\nfunction bindComputerCellsEventListeners(computer) {\n  const cells = _elements__WEBPACK_IMPORTED_MODULE_1__.computerGameboardContainer.querySelectorAll(\".cell\")\n\n  cells.forEach((cell) => {\n    cell.addEventListener(\"click\", (event) => handleCellClick(event, computer))\n  })\n}\n\nfunction handleCellClick(event, computer) {\n  const locationString = event.target.dataset.location.split(\",\")\n  const location = locationString.map((location) => Number(location))\n\n  const code = (0,_game_logic_player__WEBPACK_IMPORTED_MODULE_0__.attackPlayer)(computer, location)\n  ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderComputerCell)(code)\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom_manipulation/bindEventListeners.js?");

/***/ }),

/***/ "./src/dom_manipulation/elements.js":
/*!******************************************!*\
  !*** ./src/dom_manipulation/elements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerGameboardContainer\": () => (/* binding */ computerGameboardContainer),\n/* harmony export */   \"playerGameboardContainer\": () => (/* binding */ playerGameboardContainer)\n/* harmony export */ });\nconst playerGameboardContainer = document.querySelector(\n  \".player-gameboard-container\"\n)\nconst computerGameboardContainer = document.querySelector(\n  \".computer-gameboard-container\"\n)\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom_manipulation/elements.js?");

/***/ }),

/***/ "./src/dom_manipulation/loadGameboard.js":
/*!***********************************************!*\
  !*** ./src/dom_manipulation/loadGameboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNewComputerGameboard\": () => (/* binding */ loadNewComputerGameboard),\n/* harmony export */   \"loadNewPlayerGameboard\": () => (/* binding */ loadNewPlayerGameboard)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/dom_manipulation/util.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/dom_manipulation/elements.js\");\n\n\n\n\n\nfunction createGameboardElement() {\n  const gameboard = document.createElement(\"div\")\n  gameboard.classList.add(\"gameboard\")\n  for (let i = 0; i < 8; i++) {\n    for (let j = 0; j < 8; j++) {\n      const cell = document.createElement(\"div\")\n      cell.classList.add(\"cell\")\n      cell.dataset.location = [i, j].toString()\n      gameboard.appendChild(cell)\n    }\n  }\n  return gameboard\n}\n\nfunction loadNewPlayerGameboard() {\n  (0,_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_elements__WEBPACK_IMPORTED_MODULE_1__.playerGameboardContainer)\n  _elements__WEBPACK_IMPORTED_MODULE_1__.playerGameboardContainer.appendChild(createGameboardElement())\n}\n\nfunction loadNewComputerGameboard() {\n  (0,_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_elements__WEBPACK_IMPORTED_MODULE_1__.computerGameboardContainer)\n  _elements__WEBPACK_IMPORTED_MODULE_1__.computerGameboardContainer.appendChild(createGameboardElement())\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom_manipulation/loadGameboard.js?");

/***/ }),

/***/ "./src/dom_manipulation/render.js":
/*!****************************************!*\
  !*** ./src/dom_manipulation/render.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderComputerCell\": () => (/* binding */ renderComputerCell),\n/* harmony export */   \"renderInitialComputerGameboard\": () => (/* binding */ renderInitialComputerGameboard),\n/* harmony export */   \"renderInitialPlayerGameboard\": () => (/* binding */ renderInitialPlayerGameboard)\n/* harmony export */ });\n\n\nconst playerGameboardContainer = document.querySelector(\n  \".player-gameboard-container\"\n)\nconst computerGameboardContainer = document.querySelector(\n  \".computer-gameboard-container\"\n)\n\nfunction renderInitialGameboard(container, gameboard) {\n  gameboard.ships.forEach((ship) => {\n    ship.locations.forEach((location) => {\n      const cell = container.querySelector(\n        `[data-location=\"${location.toString()}\"]`\n      )\n      cell.classList.add(\"ship\")\n    })\n  })\n}\n\nfunction renderInitialPlayerGameboard(player) {\n  renderInitialGameboard(playerGameboardContainer, player.gameboard)\n}\n\nfunction renderInitialComputerGameboard(computer) {\n  renderInitialGameboard(computerGameboardContainer, computer.gameboard)\n}\n\nfunction renderComputerCell(code) {\n  if (!code) return\n  const cell = computerGameboardContainer.querySelector(\n    `[data-location=\"${code.location.toString()}\"]`\n  )\n  cell.classList.add(code.result)\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom_manipulation/render.js?");

/***/ }),

/***/ "./src/dom_manipulation/util.js":
/*!**************************************!*\
  !*** ./src/dom_manipulation/util.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cleanContainer)\n/* harmony export */ });\nfunction cleanContainer(container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild)\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom_manipulation/util.js?");

/***/ }),

/***/ "./src/game_logic/game.js":
/*!********************************!*\
  !*** ./src/game_logic/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation_bindEventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom_manipulation/bindEventListeners */ \"./src/dom_manipulation/bindEventListeners.js\");\n/* harmony import */ var _dom_manipulation_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom_manipulation/render */ \"./src/dom_manipulation/render.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/game_logic/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/game_logic/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/game_logic/ship.js\");\n\n\n\n\n\n\nfunction game() {\n  // const player = createPlayer(\"Niels\", createGameboard(8, 8))\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_3__.createPlayer)(\"Computer\", (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.createGameboard)(8, 8))\n\n  const shipOne = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.createShip)(2)\n  const shipTwo = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.createShip)(3)\n  const shipThree = (0,_ship__WEBPACK_IMPORTED_MODULE_4__.createShip)(4)\n\n  console.log(\"Placing ship 1\")\n  ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.placeShipInGameboard)(computer.gameboard, shipOne, [\n    [0, 0],\n    [0, 1],\n  ])\n\n  console.log(\"Placing ship 2\")\n  ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.placeShipInGameboard)(computer.gameboard, shipTwo, [\n    [1, 0],\n    [1, 1],\n    [1, 2],\n  ])\n\n  console.log(\"Placing ship 3\")\n  ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.placeShipInGameboard)(computer.gameboard, shipThree, [\n    [2, 0],\n    [2, 1],\n    [2, 2],\n    [2, 3],\n  ])\n\n  ;(0,_dom_manipulation_render__WEBPACK_IMPORTED_MODULE_1__.renderInitialComputerGameboard)(computer)\n  ;(0,_dom_manipulation_bindEventListeners__WEBPACK_IMPORTED_MODULE_0__.bindComputerCellsEventListeners)(computer)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game_logic/game.js?");

/***/ }),

/***/ "./src/game_logic/gameboard.js":
/*!*************************************!*\
  !*** ./src/game_logic/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"areAllShipsSunk\": () => (/* binding */ areAllShipsSunk),\n/* harmony export */   \"attackGameboard\": () => (/* binding */ attackGameboard),\n/* harmony export */   \"createGameboard\": () => (/* binding */ createGameboard),\n/* harmony export */   \"placeShipInGameboard\": () => (/* binding */ placeShipInGameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/game_logic/ship.js\");\n\n\nfunction createGameboard(rows, columns) {\n  return {\n    rows,\n    columns,\n    ships: [],\n    missedLocations: [],\n  }\n}\n\nfunction placeShipInGameboard(gameboard, ship, locations) {\n  if (locations.length !== ship.length) return false\n  if (!areLocationsInBoard(gameboard, locations)) return false\n  if (!areLocationsUnique(locations)) return false\n  if (areLocationsOccupiedInBoard(gameboard, locations)) return false\n  if (!areLocationsContiguos(locations)) return false\n  ship.locations.push(...locations)\n  gameboard.ships.push(ship)\n  return true\n}\n\nfunction attackGameboard(gameboard, location) {\n  if (!isLocationInBoard(gameboard, location)) return false\n  if (isLocationAlreadyMissedInBoard(gameboard, location)) return false\n  if (isLocationAlreadyHitInBoard(gameboard, location)) return false\n  const isSomeShipHit = gameboard.ships.some((ship) => (0,_ship__WEBPACK_IMPORTED_MODULE_0__.hitShip)(ship, location))\n  if (isSomeShipHit) return { result: \"hit\", location }\n  gameboard.missedLocations.push(location)\n  return { result: \"miss\", location }\n}\n\nfunction areAllShipsSunk(gameboard) {\n  return gameboard.ships.every((ship) => {\n    return (0,_ship__WEBPACK_IMPORTED_MODULE_0__.isShipSunk)(ship)\n  })\n}\n\nfunction areLocationsInBoard(gameboard, locations) {\n  const validLocations = locations.filter((location) => {\n    return isLocationInBoard(gameboard, location)\n  })\n  return validLocations.length === locations.length\n}\n\nfunction isLocationInBoard(gameboard, location) {\n  if (location[0] < 0 || location[1] < 0) return false\n  if (location[0] >= gameboard.rows || location[1] >= gameboard.columns)\n    return false\n  return true\n}\n\nfunction areLocationsContiguos(locations) {\n  if (!hasSameRows(locations) && !hasSameColumns(locations)) return false\n  if (!areLocationsSideBySide(locations)) return false\n  return true\n}\n\nfunction hasSameRows(locations) {\n  const firstRow = locations[0][0]\n  return locations.every((location) => location[0] === firstRow)\n}\n\nfunction hasSameColumns(locations) {\n  const firstColumn = locations[0][1]\n  return locations.every((location) => location[1] === firstColumn)\n}\n\nfunction areLocationsSideBySide(locations) {\n  if (hasSameRows(locations)) {\n    const columns = locations.map((location) => location[1])\n    const sum = columns.reduce((prev, cur) => prev + cur, 0)\n    return sum === getArithmeticSeriesSum(columns)\n  }\n  if (hasSameColumns(locations)) {\n    const rows = locations.map((location) => location[0])\n    const sum = rows.reduce((prev, cur) => prev + cur, 0)\n    return sum === getArithmeticSeriesSum(rows)\n  }\n  return false\n}\n\nfunction getArithmeticSeriesSum(array) {\n  const min = Math.min(...array) // we have to destructure first (see min, max docs)\n  const max = Math.max(...array)\n  return ((min + max) * array.length) / 2 // math has a purpose???\n}\n\nfunction areLocationsUnique(locations) {\n  const locationsSet = new Set(locations.map((location) => location.toString()))\n  return locationsSet.size === locations.length\n}\n\nfunction areLocationsOccupiedInBoard(gameboard, locations) {\n  return locations.some((location) =>\n    isLocationOccupiedInBoard(gameboard, location)\n  )\n}\n\nfunction isLocationOccupiedInBoard(gameboard, location) {\n  return gameboard.ships.some((ship) => {\n    return ship.locations.some((loc) => loc.toString() === location.toString())\n  })\n}\n\nfunction isLocationAlreadyMissedInBoard(gameboard, location) {\n  return gameboard.missedLocations.some((missedLocation) => {\n    return missedLocation.toString() === location.toString()\n  })\n}\n\nfunction isLocationAlreadyHitInBoard(gameboard, location) {\n  return gameboard.ships.some((ship) => {\n    return ship.hits.some((hit) => hit.toString() === location.toString())\n  })\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game_logic/gameboard.js?");

/***/ }),

/***/ "./src/game_logic/player.js":
/*!**********************************!*\
  !*** ./src/game_logic/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attackPlayer\": () => (/* binding */ attackPlayer),\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer),\n/* harmony export */   \"generateComputerMove\": () => (/* binding */ generateComputerMove)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/game_logic/gameboard.js\");\n\n\nfunction createPlayer(name, gameboard) {\n  return { name, gameboard }\n}\n\nfunction attackPlayer(player, location) {\n  return (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.attackGameboard)(player.gameboard, location)\n}\n\nfunction generateComputerMove(player) {\n  while (true) {\n    const x = generateRandom(player.gameboard.rows)\n    const y = generateRandom(player.gameboard.columns)\n    const attackCode = attackPlayer(player, [x, y])\n    if (attackCode.result === \"hit\" || attackCode.result === \"miss\")\n      return attackCode\n  }\n}\n\nfunction generateRandom(number) {\n  return Math.floor(Math.random() * number)\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game_logic/player.js?");

/***/ }),

/***/ "./src/game_logic/ship.js":
/*!********************************!*\
  !*** ./src/game_logic/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip),\n/* harmony export */   \"hitShip\": () => (/* binding */ hitShip),\n/* harmony export */   \"isShipSunk\": () => (/* binding */ isShipSunk)\n/* harmony export */ });\nfunction createShip(length) {\n  return {\n    length,\n    locations: [],\n    hits: [],\n  }\n}\n\nfunction hitShip(ship, location) {\n  if (!isLocationInShip(ship, location)) return false\n  if (isLocationAlreadyHit(ship, location)) return false\n  ship.hits.push(location)\n  return true\n}\n\nfunction isShipSunk(ship) {\n  return ship.locations.length === ship.hits.length\n}\n\nfunction isLocationInShip(ship, location) {\n  const locations = ship.locations.map((location) => location.toString())\n  if (locations.includes(location.toString())) return true\n}\n\nfunction isLocationAlreadyHit(ship, location) {\n  const hits = ship.hits.map((hit) => hit.toString())\n  if (hits.includes(location.toString())) return true\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game_logic/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game_logic_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_logic/game */ \"./src/game_logic/game.js\");\n/* harmony import */ var _dom_manipulation_loadGameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_manipulation/loadGameboard */ \"./src/dom_manipulation/loadGameboard.js\");\n\n\n\n\nmain()\n\nfunction main() {\n  ;(0,_dom_manipulation_loadGameboard__WEBPACK_IMPORTED_MODULE_2__.loadNewComputerGameboard)()\n  ;(0,_dom_manipulation_loadGameboard__WEBPACK_IMPORTED_MODULE_2__.loadNewPlayerGameboard)()\n  ;(0,_game_logic_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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