"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_module_2"] = self["webpackChunkcapstone_module_2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.footer-text {\\n  border: solid 4px black;\\n  padding: 2rem;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 1.3rem;\\n}\\n\\nul li {\\n  list-style-type: none;\\n}\\n\\n.header {\\n  display: flex;\\n  gap: 2rem;\\n  margin: 0 auto;\\n  max-width: 900px;\\n  width: 90%;\\n  margin-top: 2rem;\\n  align-items: center;\\n}\\n\\n.logo {\\n  border: 1px solid black;\\n  padding: 0.5rem;\\n  border-radius: 5rem;\\n}\\n\\n.navbar-list {\\n  display: flex;\\n  gap: 2rem;\\n}\\n\\n.photo-item h3 {\\n  margin-top: 0.5rem;\\n}\\n\\n.modal-container {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: opacity 0.3s ease;\\n}\\n\\n.modal-container.show {\\n  opacity: 1;\\n  pointer-events: auto;\\n}\\n\\n.modal {\\n  background-color: #fff;\\n  border: 1px solid #000;\\n  width: 600px;\\n  max-width: 90%;\\n  padding: 2rem;\\n  border-radius: 0.5rem;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\\n  text-align: center;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  overflow-y: scroll;\\n  min-height: 600px;\\n  height: 600px;\\n}\\n\\n.modal .btn-close {\\n  position: absolute;\\n  border: none;\\n  font-size: 2rem;\\n  background-color: #fff;\\n  cursor: pointer;\\n  top: 0.5rem;\\n  right: 0.5rem;\\n}\\n\\n.modal .description {\\n  border: 1px solid #808080;\\n  border-radius: 0.5rem;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\\n  justify-content: space-around;\\n  padding: 0.4rem;\\n  display: flex;\\n  flex-flow: row wrap;\\n  width: 100%;\\n  gap: 0.5rem 2rem;\\n}\\n\\n.modal .description p {\\n  width: 40%;\\n}\\n\\n.modal .popup-image {\\n  width: 100%;\\n  height: 100%;\\n  border-radius: 0.5rem;\\n  object-fit: contain;\\n  border: 1px solid #808080;\\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.3);\\n}\\n\\n.photos-wrapper {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));\\n  gap: 3rem;\\n  padding: 2% 10%;\\n  margin: auto;\\n}\\n\\n.photo-item {\\n  padding: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.like-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  margin-top: -1.5rem;\\n}\\n\\n.modal .comments-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  align-items: flex-start;\\n  padding: 0.4rem;\\n  border: 1px solid #808080;\\n  border-radius: 0.5rem;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\\n}\\n\\n.comment-form h3 {\\n  align-self: center;\\n}\\n\\n.modal .comments-list h3 {\\n  align-self: center;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  gap: 0.5rem;\\n  width: 100%;\\n  padding: 0.5rem;\\n}\\n\\n.comment-form input,\\n.comment-form textarea {\\n  padding: 0.4rem;\\n  width: 100%;\\n  outline: none;\\n  border: 1px solid #808080;\\n  border-radius: 0.3rem;\\n}\\n\\n.comment-form input:focus,\\n.comment-form textarea:focus {\\n  background-color: #ececec;\\n}\\n\\n.comment-form .btn-add-comment {\\n  padding: 0.5rem 1rem;\\n  cursor: pointer;\\n}\\n\\n.error {\\n  color: white;\\n  background-color: #f00;\\n  padding: 0.5rem;\\n}\\n\\n.success {\\n  color: white;\\n  background-color: #008000;\\n  padding: 0.5rem;\\n}\\n\\n/* Styling for the like button */\\n\\n.photo-item img {\\n  width: auto;\\n  height: 100%;\\n  object-fit: fill;\\n}\\n\\n.fa-heart {\\n  color: red;\\n  cursor: pointer;\\n}\\n\\n.transform-active {\\n  animation: heart 0.5s ease-in;\\n}\\n\\n@keyframes heart {\\n  0% {\\n    transform: scale(0.5);\\n  }\\n\\n  100% {\\n    transform: scale(1.6);\\n  }\\n}\\n\\n/* Styling for the photo buttons */\\n\\n.photo-item button {\\n  cursor: pointer;\\n  border: none;\\n  margin: 0.2rem;\\n  padding: 0.2rem;\\n  border-radius: 10px;\\n  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);\\n  font-size: 1rem;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-weight: 300;\\n}\\n\\n.photo-item button:hover {\\n  background-color: rgb(230, 230, 194);\\n}\\n\\n.photo-item button:active {\\n  transform: scale(0.88);\\n  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-module-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-module-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-module-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComments\": () => (/* binding */ countComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\nconst getComments = async (id) => {\n  try {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n    const appID = 'os4g1sp0qRngry7c8HYv';\n    const requestedURL = `${baseURL}/apps/${appID}/comments?item_id=${id}`;\n    const response = await fetch(requestedURL, {\n      method: 'GET',\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst postComments = async (id, userName, userComment) => {\n  try {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n    const appID = 'os4g1sp0qRngry7c8HYv';\n    const requestedURL = `${baseURL}/apps/${appID}/comments`;\n\n    const response = await fetch(requestedURL, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: userName,\n        comment: userComment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n\n    const data = await response;\n    return data.status;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst countComments = (arr) => {\n  if (arr.length > 0) {\n    return arr.length;\n  }\n  return 0;\n};\n\n\n\n\n//# sourceURL=webpack://capstone-module-2/./src/comments.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/likes.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/itemsCounter.js\");\n\n\n\n\n\nconst cars = document.querySelector('.cars');\nconst nature = document.querySelector('.nature');\nconst arch = document.querySelector('.architecture');\n\nconst asyncGetCall = async (photographer) => {\n  try {\n    const username = photographer;\n    const response = await fetch(`https://api.unsplash.com/users/${username}/photos?orientation=portrait&page=1&per_page=9&client_id=ORV6G4HML0wf1fJObg3OgNJTNx-asI0llrIPLPMpwYw\n    `, {\n      method: 'GET',\n\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst showMessage = (msg, status) => {\n  const displayMessage = document.querySelector('.message');\n  displayMessage.classList.add(status);\n  displayMessage.innerHTML = msg;\n\n  setTimeout(() => {\n    displayMessage.innerHTML = '';\n    displayMessage.classList.remove(status);\n  }, 2000);\n};\n\nconst showPopupComment = (imgObj) => {\n  const modalContainer = document.querySelector('#modal_container');\n  modalContainer.classList.add('show');\n  const modal = document.createElement('div');\n  modal.classList.add('modal');\n  const commentsDiv = document.createElement('div');\n  commentsDiv.classList.add('comments-list');\n\n  const content = `<img src=${imgObj[0].img} class=\"popup-image\">\n      <button class=\"btn-close\" id=\"close-comment\"><i class=\"fa-solid fa-xmark\"></i></button>\n      <h3>${imgObj[0].desc}</h3>\n      <div class=\"description\">\n        <p>width: ${imgObj[0].width}</p>\n        <p>height: ${imgObj[0].height}</p>\n        <p>id: ${imgObj[0].id}</p>\n        <p>color: ${imgObj[0].color}</p>\n      </div>`;\n\n  const commentForm = `<form class=\"comment-form\">\n            <h3>Add a comment</h3>\n            <p class=\"message\"></p>\n            <input type=\"text\" class=\"user-name\" required placeholder=\"Your name\">\n            <textarea class=\"user-comment\" cols=\"30\" rows=\"10\" placeholder=\"Your Insights\"></textarea>\n            <button class=\"btn btn-add-comment\">Comment</button>\n          </form>`;\n\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(imgObj[0].id).then((values) => {\n    const numOfComments = (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.countComments)(values);\n    commentsDiv.innerHTML += `<h3>Comments (${numOfComments})</h3>`;\n    if (numOfComments > 0) {\n      values.forEach((value) => {\n        commentsDiv.innerHTML += `<p>${value.creation_date} ${value.username}: ${value.comment}</p>`;\n      });\n    }\n  }).then(() => {\n    modal.innerHTML = content;\n    modal.appendChild(commentsDiv);\n    modal.innerHTML += commentForm;\n    modalContainer.appendChild(modal);\n\n    const btnAddComment = document.querySelector('.btn-add-comment');\n    btnAddComment.addEventListener('click', (e) => {\n      e.preventDefault();\n      const userName = document.querySelector('.user-name');\n      const userComment = document.querySelector('.user-comment');\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.postComments)(imgObj[0].id, userName.value, userComment.value).then((status) => {\n        if (status === 201) {\n          showMessage('Comment Added Successfully', 'success');\n        } else {\n          showMessage('There is some error', 'error');\n        }\n        userName.value = '';\n        userComment.value = '';\n      });\n    });\n\n    const closeComment = document.querySelector('#close-comment');\n    closeComment.addEventListener('click', () => {\n      modalContainer.classList.remove('show');\n      modalContainer.removeChild(modal);\n    });\n  });\n};\n\nconst photoWrapper = document.querySelector('.photos-wrapper');\nconst showlist = (photographer) => {\n  const arr = [];\n  photoWrapper.innerHTML = '';\n  asyncGetCall(photographer).then((value) => {\n    for (let index = 0; index < 8; index += 1) {\n      const obj = {\n        id: value[index].id,\n        img: value[index].urls.thumb,\n        desc: value[index].description,\n        color: value[index].color,\n        width: value[index].width,\n        height: value[index].height,\n      };\n      const url = value[index].urls.thumb;\n      const { id } = value[index];\n      const b = document.createElement('div');\n      b.classList.add('photo-item');\n      b?.setAttribute('id', obj.id);\n      b.innerHTML = `<img src=\"${url}\" alt=\"photo\" />\n  <h3>Id: ${id}</h3>\n  <div class=\"like-container\">\n    <i class=\"fa fa-heart\" id=\"like\"></i>\n    <div class=\"like-counter\"></div>\n  </div>\n  <button class=\"open-comments\">Comments</button>\n  <button>Reservations</button>`;\n      arr.push(obj);\n      photoWrapper.appendChild(b);\n    }\n    const heart = document.querySelectorAll('.fa-heart');\n    heart.forEach((element) => {\n      element.addEventListener('click', () => {\n        element.classList.toggle('transform-active');\n        setTimeout(() => {\n          element.classList.remove('transform-active');\n        }, 1000);\n      });\n    });\n    (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const counter = (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    if (photographer === 'ixography') {\n      cars.innerHTML = `Cars (${counter})`;\n      nature.innerHTML = 'Nature';\n      arch.innerHTML = 'Architecture ';\n    } else if (photographer === 'parrish') {\n      arch.innerHTML = `Architecture (${counter})`;\n      nature.innerHTML = 'Nature';\n      cars.innerHTML = 'Cars';\n    } else if (photographer === 'gerandeklerk') {\n      nature.innerHTML = `Nature (${counter})`;\n      arch.innerHTML = 'Architecture';\n      cars.innerHTML = 'Cars';\n    }\n\n    const openComments = document.querySelectorAll('.open-comments');\n    openComments.forEach((comment) => {\n      comment.addEventListener('click', (e) => {\n        const { id } = e.target.parentElement;\n        const imgObj = arr.filter((img) => img.id === id);\n        showPopupComment(imgObj);\n      });\n    });\n\n    const likeButton = document.querySelectorAll('.fa-heart');\n\n    likeButton.forEach((button) => {\n      button.addEventListener('mouseup', (e) => {\n        const { id } = e.target.parentElement.parentElement;\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(id).then((status) => {\n          if (status === 201) {\n            const count = e.target.nextElementSibling.innerHTML;\n            e.target.nextElementSibling.innerHTML = parseInt(count, 10) + 1;\n          }\n        });\n      });\n    });\n  });\n\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)().then((value) => {\n    const counter = document.querySelectorAll('.like-counter');\n    counter.forEach((item) => {\n      const { id } = item.parentElement.parentElement;\n\n      const totalLikes = value.filter((obj) => obj.item_id === id);\n\n      if (totalLikes[0] !== undefined) {\n        item.innerHTML = `${totalLikes[0].likes}`;\n      } else {\n        item.innerHTML = '0';\n      }\n    });\n  });\n};\n\nshowlist('ixography');\n\narch.addEventListener('click', () => {\n  showlist('parrish');\n});\n\nnature.addEventListener('click', () => {\n  showlist('gerandeklerk');\n});\n\ncars.addEventListener('click', () => {\n  showlist('ixography');\n});\n\n\n//# sourceURL=webpack://capstone-module-2/./src/index.js?");

/***/ }),

/***/ "./src/itemsCounter.js":
/*!*****************************!*\
  !*** ./src/itemsCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst count = () => {\n  const items = document.querySelectorAll('.photo-item');\n  let counter = 0;\n  items.forEach(() => {\n    counter += 1;\n  });\n  return counter;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);\n\n//# sourceURL=webpack://capstone-module-2/./src/itemsCounter.js?");

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst getLikes = async () => {\n  try {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n    const appID = 'os4g1sp0qRngry7c8HYv';\n    const requestedURL = `${baseURL}/apps/${appID}/likes`;\n    const response = await fetch(requestedURL, {\n      method: 'GET',\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst postLikes = async (id) => {\n  try {\n    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n    const appID = 'os4g1sp0qRngry7c8HYv';\n    const requestedURL = `${baseURL}/apps/${appID}/likes`;\n    const response = await fetch(requestedURL, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await response;\n    return data.status;\n  } catch (error) {\n    return error;\n  }\n};\n\n\n//# sourceURL=webpack://capstone-module-2/./src/likes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);