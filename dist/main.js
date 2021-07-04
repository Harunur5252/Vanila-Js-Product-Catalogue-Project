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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n_modules_data__WEBPACK_IMPORTED_MODULE_1__.default.productData = _modules_storage__WEBPACK_IMPORTED_MODULE_2__.default.getDataFromLocalStorage();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__.default.loadEventListener();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Data = /*#__PURE__*/function () {\n  function Data() {\n    _classCallCheck(this, Data);\n\n    this.itemLength = 0;\n  }\n\n  _createClass(Data, [{\n    key: \"inValidInput\",\n    value: function inValidInput(name, price) {\n      return name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price));\n    }\n  }, {\n    key: \"generateId\",\n    value: function generateId() {\n      var id = 0;\n\n      if (data.productData.length === 0) {\n        id = 0;\n      } else {\n        id = data.productData[data.productData.length - 1].id + 1;\n      }\n\n      return id;\n    }\n  }, {\n    key: \"productDataPushInArray\",\n    value: function productDataPushInArray(id, name, price) {\n      var data = {\n        id: id,\n        name: name,\n        price: price\n      };\n      data.productData.push(data); // UI.getData(this.productData)\n      // storage.saveDataToLocalStorage(data)\n    }\n  }, {\n    key: \"deleteProductData\",\n    value: function deleteProductData(id) {\n      var result = data.productData.filter(function (productItem) {\n        return productItem.id !== id;\n      });\n      data.productData = result;\n    }\n  }, {\n    key: \"findProduct\",\n    value: function findProduct(id) {\n      var foundProduct = data.productData.find(function (productItem) {\n        return productItem.id === id;\n      });\n\n      if (!foundProduct) {\n        ui.showAlert('You product is not Found');\n        return;\n      }\n\n      return foundProduct;\n    }\n  }, {\n    key: \"updateProductData\",\n    value: function updateProductData(productNameInputElm, productPriceInputElm, id) {\n      data.productData = data.productData.map(function (productItem) {\n        if (productItem.id === id) {\n          return _objectSpread(_objectSpread({}, productItem), {}, {\n            name: productNameInputElm.value,\n            price: productPriceInputElm.value\n          });\n        } else {\n          return productItem;\n        }\n      });\n    }\n  }, {\n    key: \"itemLengthForSearch\",\n    value: function itemLengthForSearch() {\n      if (data.itemLength > 0) {\n        ui.showMessage('');\n      } else {\n        ui.showMessage('No item found');\n      }\n    }\n  }]);\n\n  return Data;\n}();\n\nvar data = new Data();\nvar ui = new _ui__WEBPACK_IMPORTED_MODULE_0__.default();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Storage = /*#__PURE__*/function () {\n  function Storage() {\n    _classCallCheck(this, Storage);\n  }\n\n  _createClass(Storage, [{\n    key: \"saveDataToLocalStorage\",\n    value: function saveDataToLocalStorage(item) {\n      var items = '';\n\n      if (localStorage.getItem('productItems') === null) {\n        items = [];\n        items.push(item);\n        localStorage.setItem('productItems', JSON.stringify(items));\n      } else {\n        items = JSON.parse(localStorage.getItem('productItems'));\n        items.push(item);\n        localStorage.setItem('productItems', JSON.stringify(items));\n      }\n    }\n  }, {\n    key: \"deleteItemFromLocalStorage\",\n    value: function deleteItemFromLocalStorage(id) {\n      var items = JSON.parse(localStorage.getItem('productItems'));\n      var result = items.filter(function (productItem) {\n        return productItem.id !== id;\n      });\n      localStorage.setItem('productItems', JSON.stringify(result));\n\n      if (result.length === 0) {\n        location.reload();\n      }\n    }\n  }], [{\n    key: \"getDataFromLocalStorage\",\n    value: function getDataFromLocalStorage() {\n      var items = '';\n\n      if (localStorage.getItem('productItems') === null) {\n        items = [];\n      } else {\n        items = JSON.parse(localStorage.getItem('productItems'));\n      }\n\n      return items;\n    }\n  }]);\n\n  return Storage;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  } // selectors\n\n\n  _createClass(UI, [{\n    key: \"selectors\",\n    value: function selectors() {\n      var filterInputElm = document.querySelector('.filter');\n      var productListUlElm = document.querySelector('.collection');\n      var productNameInputElm = document.querySelector('.product-name');\n      var productPriceInputElm = document.querySelector('.product-price');\n      var addBtnElm = document.querySelector('.add-product');\n      var deleteBtnElm = document.querySelector('.delete-product');\n      var msgElm = document.querySelector('.msg');\n      var nameEElm = document.querySelector('.nameE');\n      var priceEElm = document.querySelector('.priceE');\n      return {\n        filterInputElm: filterInputElm,\n        productListUlElm: productListUlElm,\n        productNameInputElm: productNameInputElm,\n        productPriceInputElm: productPriceInputElm,\n        addBtnElm: addBtnElm,\n        deleteBtnElm: deleteBtnElm,\n        msgElm: msgElm,\n        nameEElm: nameEElm,\n        priceEElm: priceEElm\n      };\n    } // load all eventListener\n\n  }, {\n    key: \"showMessage\",\n    value: // show error message\n    function showMessage(message) {\n      var _ui$selectors = ui.selectors(),\n          msgElm = _ui$selectors.msgElm;\n\n      msgElm.textContent = message;\n    }\n  }, {\n    key: \"showAlert\",\n    value: function showAlert(alertMsg) {\n      return alert(alertMsg);\n    } // create li in ul \n\n  }, {\n    key: \"getData\",\n    value: function getData(productList) {\n      var _ui$selectors2 = ui.selectors(),\n          productListUlElm = _ui$selectors2.productListUlElm;\n\n      if (productList.length > 0) {\n        ui.showMessage('');\n        var li = '';\n        productList.forEach(function (_ref) {\n          var id = _ref.id,\n              name = _ref.name,\n              price = _ref.price;\n          li = document.createElement('li');\n          li.className = \"list-group-item collection-item\";\n          li.id = \"product-\".concat(id);\n          li.innerHTML = \"\\n                    <strong>\".concat(name, \"</strong>\\n                    <span class=\\\"price\\\">\").concat(price, \"</span>\\n                        <i class=\\\"fa fa-trash float-right delete-product\\\" aria-hidden=\\\"true\\\"></i>\\n                        <i class=\\\"fa fa-edit  float-right edit-product\\\" aria-hidden=\\\"true\\\"></i>\\n            \");\n          productListUlElm.appendChild(li);\n        });\n      } else {\n        ui.showMessage('Please add item to your catalogue');\n      }\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem(e) {\n      var _ui$selectors3 = ui.selectors(),\n          productNameInputElm = _ui$selectors3.productNameInputElm,\n          productPriceInputElm = _ui$selectors3.productPriceInputElm,\n          productListUlElm = _ui$selectors3.productListUlElm;\n\n      e.preventDefault();\n      var name = productNameInputElm.value;\n      var price = productPriceInputElm.value;\n      var id = data.generateId();\n      var isInputOk = data.inValidInput(name, price);\n\n      if (isInputOk) {\n        ui.showAlert('please fill up necessary and valid information');\n      } else {\n        data.productDataPushInArray(id, name, price);\n        productListUlElm.innerHTML = ''; // const data ={\n        //     id,\n        //     name,\n        //     price\n        // }\n        // productData.push(data)\n        // productListUl.innerHTML=''\n\n        ui.getData(data.productData);\n        storage.saveDataToLocalStorage({\n          id: id,\n          name: name,\n          price: price\n        });\n        productNameInputElm.value = '';\n        productPriceInputElm.value = '';\n      }\n    }\n  }, {\n    key: \"populateEditItem\",\n    value: function populateEditItem(foundProduct) {\n      var _ui$selectors4 = ui.selectors(),\n          productNameInputElm = _ui$selectors4.productNameInputElm,\n          productPriceInputElm = _ui$selectors4.productPriceInputElm,\n          addBtnElm = _ui$selectors4.addBtnElm;\n\n      productNameInputElm.value = foundProduct.name;\n      productPriceInputElm.value = foundProduct.price;\n      addBtnElm.style.display = 'none';\n      var updateBtn = \"<button type='submit' class='btn btn-block btn-info update-product text-center'>update</button>\";\n      document.querySelector('form').insertAdjacentHTML('beforeend', updateBtn); // document.querySelector('.edit-product').style.display = 'none'\n    }\n  }, {\n    key: \"updateProductItem\",\n    value: function updateProductItem(id) {\n      var _ui$selectors5 = ui.selectors(),\n          productNameInputElm = _ui$selectors5.productNameInputElm,\n          productPriceInputElm = _ui$selectors5.productPriceInputElm,\n          addBtnElm = _ui$selectors5.addBtnElm,\n          productListUlElm = _ui$selectors5.productListUlElm;\n\n      document.querySelector('.update-product').addEventListener('click', function (e) {\n        e.preventDefault();\n        var isInputOk = data.inValidInput(productNameInputElm.value, productPriceInputElm.value);\n\n        if (isInputOk) {\n          ui.showAlert('input is not valid');\n        } else {\n          data.updateProductData(productNameInputElm, productPriceInputElm, id);\n        }\n\n        productListUlElm.innerHTML = '';\n        ui.getData(data.productData);\n        productNameInputElm.value = '';\n        productPriceInputElm.value = '';\n        addBtnElm.style.display = 'block';\n        document.querySelector('.update-product').remove(); //save updated array to localStorage\n\n        localStorage.setItem('productItems', JSON.stringify(data.productData));\n      });\n    }\n  }, {\n    key: \"modifyOrDeleteProduct\",\n    value: function modifyOrDeleteProduct(e) {\n      var target = e.target.parentElement;\n      var id = Number(target.id.split('-')[1]);\n\n      if (e.target.classList.contains('delete-product')) {\n        e.target.parentElement.parentElement.removeChild(target);\n        data.deleteProductData(id);\n        storage.deleteItemFromLocalStorage(id);\n      } else if (e.target.classList.contains('edit-product')) {\n        var foundProduct = data.findProduct(id); //i have to select the item to edit\n\n        ui.populateEditItem(foundProduct);\n        e.target.style.display = 'none'; //update Product\n\n        ui.updateProductItem(foundProduct.id);\n      }\n    }\n  }, {\n    key: \"searchProduct\",\n    value: function searchProduct(e) {\n      var text = e.target.value.toLowerCase();\n      document.querySelectorAll('.collection .collection-item').forEach(function (item) {\n        var nameOfProduct = item.firstElementChild.textContent.toLowerCase();\n\n        if (nameOfProduct.indexOf(text) === -1) {\n          item.style.display = 'none';\n        } else {\n          item.style.display = 'block';\n          data.itemLength++;\n        }\n      });\n      data.itemLengthForSearch();\n    }\n  }], [{\n    key: \"loadEventListener\",\n    value: function loadEventListener() {\n      var _ui$selectors6 = ui.selectors(),\n          addBtnElm = _ui$selectors6.addBtnElm,\n          productListUlElm = _ui$selectors6.productListUlElm,\n          filterInputElm = _ui$selectors6.filterInputElm;\n\n      window.addEventListener('DOMContentLoaded', function () {\n        return ui.getData(data.productData);\n      });\n      addBtnElm.addEventListener('click', function (e) {\n        return ui.addItem(e);\n      });\n      productListUlElm.addEventListener('click', function (e) {\n        return ui.modifyOrDeleteProduct(e);\n      });\n      filterInputElm.addEventListener('keyup', function (e) {\n        return ui.searchProduct(e);\n      });\n    }\n  }]);\n\n  return UI;\n}();\n\nvar ui = new UI();\nvar data = new _data__WEBPACK_IMPORTED_MODULE_0__.default();\nvar storage = new _storage__WEBPACK_IMPORTED_MODULE_1__.default();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ui.js?");

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