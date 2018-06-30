/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/*! exports provided: calcSpacers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcSpacers\", function() { return calcSpacers; });\nfunction calcSpacers(distance, spacers) {\n\tlet table = [];\n\tlet lastSpacer = [];\n\tlet solutions = [];\n\n\tfor (let i = 0; i <= distance; i++) {\n\t\ttable.push(Number.MAX_SAFE_INTEGER);\n\t\tlastSpacer.push(-1);\n\t}\n\ttable[0] = 0;\n\n\t// find number of spacers in optimal solution\n\tfor (let i = 0; i < spacers.length; i++) {\n\t\tfor (let j = 0; j <= distance; j++) {\n\t\t\tif (j >= spacers[i].length) {\n\t\t\t\ttable[j] = Math.min(table[j], table[j - spacers[i].length] + 1);\n\n\t\t\t\tif (table[j] === (table[j - spacers[i].length]) + 1) {\n\t\t\t\t\tlastSpacer[j] = i;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tlet numSpacers = table[distance];\n\n\t// find which spacers were used\n\tdo {\n\t\tsolutions.push(lastSpacer[distance]);\n\t\tdistance -= spacers[lastSpacer[distance]].length;\n\t\tnumSpacers--;\n\t} while (lastSpacer[distance] > -1);\n\n\tlet sumSpacers = 0;\n\n\tfor (let i = 0; i < solutions.length; i++) {\n\t\tsumSpacers += spacers[solutions[i]].length;\n\t\tspacers[solutions[i]].quantity++;\n\t}\n\tconsole.log(spacers);\n\treturn spacers;\n}\n\n\n\n//# sourceURL=webpack:///./src/calc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let spacers = __webpack_require__(/*! ./spacers */ \"./src/spacers.js\");\nlet calc = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\n\n// manage checking and unchecking all\nfunction checkAll() {\n    let checkboxes = document.getElementsByClassName(\"spacerOption\");\n\n    for (let i = 0; i < checkboxes.length; i++) {\n        checkboxes[i].checked = true;\n    }\n}\n\nfunction uncheckAll() {\n    let checkboxes = document.getElementsByClassName(\"spacerOption\");\n\n    for (let i = 0; i < checkboxes.length; i++) {\n        checkboxes[i].checked = false;\n    }\n}\n\ncheckAll();\n\ndocument.getElementById(\"checkall\").addEventListener(\"click\", checkAll);\n\ndocument.getElementById(\"uncheckall\").addEventListener(\"click\", uncheckAll);\n\n// handle textbox CSS stuff\ndocument.getElementById(\"text\").addEventListener(\"click\", () => {\n    let textContainer = document.getElementById(\"textcontainer\");\n    textContainer.style.borderBottom = \"solid 3px black\";\n    textContainer.pseudoStyle(\"after\", \"border-bottom\", \"0px solid black\");\n})\n\n// handle input submission\ndocument.getElementById(\"submit\").addEventListener(\"click\", () => {\n    document.getElementById(\"response\").innerHTML = \"\";\n    let input = document.getElementById(\"text\").value;\n    let availableSpacers = spacers.getSpacers(); \n    let result = calc.calcSpacers(Math.round(1000 * parseFloat(input)), availableSpacers);\n\n    for (let i = 0; i < result.length; i++) {\n        if (result[i].quantity > 0) {\n            document.getElementById(\"response\").appendChild(spacers.displaySpacer(result[i]));\n        }\n    }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/spacers.js":
/*!************************!*\
  !*** ./src/spacers.js ***!
  \************************/
/*! exports provided: getSpacers, displaySpacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSpacers\", function() { return getSpacers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySpacer\", function() { return displaySpacer; });\n function getSpacers() {\n\tfunction Spacer (length, name, ID) {\n\t\tthis.length = length;\n\t\tthis.name = name;\n\t\tthis.ID = ID;\n\t\tthis.quantity = 0;\n\t}\n\n\tvar spacers = [];\n\n\tif (document.getElementById(\"s125\").checked) {\n\t\tspacers.push(new Spacer(125, \"0.125 Spacer (Nylon)\", \"s125\"));\n\t}\n\n\tif (document.getElementById(\"s250\").checked) {\n\t\tspacers.push(new Spacer(250, \"0.250 Spacer (Nylon)\", \"s250\"));\n\t}\n\n\tif (document.getElementById(\"s375\").checked) {\n\t\tspacers.push(new Spacer(375, \"0.375 Spacer (Nylon)\", \"s375\"));\n\t}\n\n\tif (document.getElementById(\"s500\").checked) {\n\t\tspacers.push(new Spacer(500, \"0.500 Spacer (Nylon)\", \"s500\"));\n\t}\n\n\tif (document.getElementById(\"s190\").checked) {\n\t\tspacers.push(new Spacer(190, \"4.6mm Spacer\", \"s190\"));\n\t}\n\n\tif (document.getElementById(\"s330\").checked) {\n\t\tspacers.push(new Spacer(330, \"8mm Spacer\", \"s330\"));\n\t}\n\n\tif (document.getElementById(\"s32\").checked) {\n\t\tspacers.push(new Spacer(32, \"Steel Washer (0.032)\", \"s32\"));\n\t}\n\n\tif (document.getElementById(\"s40\").checked) {\n\t\tspacers.push(new Spacer(40, \"Teflon Washer (0.040)\", \"s40\"));\n\t}\n\n\treturn spacers;\n}\n\nfunction displaySpacer(spacer) {\n\tlet element = document.createElement(\"div\");\n\telement.innerHTML = spacer.name + \" (x\" + spacer.quantity + \")\";\n\treturn element;\n}\n\n\n//# sourceURL=webpack:///./src/spacers.js?");

/***/ })

/******/ });