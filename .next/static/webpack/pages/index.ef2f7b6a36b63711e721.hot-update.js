webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ExperienceItem.js":
/*!**************************************!*\
  !*** ./components/ExperienceItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExperienceItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Icons_MiniIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Icons/MiniIcon */ \"./components/Icons/MiniIcon.js\");\n\n\nvar _jsxFileName = \"/Users/spencerragan/vueProjects/portfolio/components/ExperienceItem.js\";\n\nfunction ExperienceItem(_ref) {\n  var title = _ref.title,\n      company = _ref.company,\n      time = _ref.time,\n      description = _ref.description,\n      icon = _ref.icon,\n      isLast = _ref.isLast;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: isLast ? 'pb-3' : 'border-l-2 border-gray-700 pb-3',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex items-flex-start\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"-ml-3\",\n          children: Object(_components_Icons_MiniIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(icon)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex-1 ml-4 max-w-3xl\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-lg font-semibold\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-md opacity-80\",\n            children: company\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-sm opacity-50\",\n            children: time\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }, this)\n  }, void 0, false);\n}\n_c = ExperienceItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"ExperienceItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBlcmllbmNlSXRlbS5qcz80ZWE0Il0sIm5hbWVzIjpbIkV4cGVyaWVuY2VJdGVtIiwidGl0bGUiLCJjb21wYW55IiwidGltZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImlzTGFzdCIsIk1pbmlJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsY0FBVCxPQUE4RTtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsT0FBNEMsUUFBNUNBLE9BQTRDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxXQUE2QixRQUE3QkEsV0FBNkI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzNGLHNCQUFRO0FBQUEsMkJBQ047QUFBSSxlQUFTLEVBQUdBLE1BQU0sR0FBRyxNQUFILEdBQVksaUNBQWxDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxvQkFDSUMsMEVBQVEsQ0FBQ0YsSUFBRDtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsdUJBQWI7QUFBQSxzQkFBdUNKO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsb0JBQWI7QUFBQSxzQkFBb0NDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFHLHFCQUFTLEVBQUMsb0JBQWI7QUFBQSxzQkFBb0NDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFBLHNCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxtQkFBUjtBQWVEO0tBaEJ1QkosYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRXhwZXJpZW5jZUl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWluaUljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9NaW5pSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVyaWVuY2VJdGVtICh7IHRpdGxlLCBjb21wYW55LCB0aW1lLCBkZXNjcmlwdGlvbiwgaWNvbiwgaXNMYXN0IH0pIHtcbiAgcmV0dXJuICg8PlxuICAgIDxsaSBjbGFzc05hbWU9eyBpc0xhc3QgPyAncGItMycgOiAnYm9yZGVyLWwtMiBib3JkZXItZ3JheS03MDAgcGItMycgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1mbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1sLTNcIj5cbiAgICAgICAgICB7IE1pbmlJY29uKGljb24pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTQgbWF4LXctM3hsXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+eyB0aXRsZSB9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgb3BhY2l0eS04MFwiPnsgY29tcGFueSB9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gb3BhY2l0eS01MFwiPnsgdGltZSB9PC9wPlxuICAgICAgICAgIDxwPnsgZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICA8Lz4pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceItem.js\n");

/***/ }),

/***/ "./components/Icons/MiniIcon.js":
/*!**************************************!*\
  !*** ./components/Icons/MiniIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MiniIcon; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MiniIcon(componentName) {\n  var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( // create element based on a string, like IoLogoVue\n  eval(componentName), {\n    color: 'white',\n    size: '1rem'\n  });\n  var Circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( // circle around the icon\n  'div', {\n    className: \"h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 shadow-md z-30\"\n  }, Icon);\n  return Circle;\n}\n_c = MiniIcon;\n\nvar _c;\n\n$RefreshReg$(_c, \"MiniIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29ucy9NaW5pSWNvbi5qcz8zY2U4Il0sIm5hbWVzIjpbIk1pbmlJY29uIiwiY29tcG9uZW50TmFtZSIsIkljb24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJldmFsIiwiY29sb3IiLCJzaXplIiwiQ2lyY2xlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsYUFBbEIsRUFBaUM7QUFDOUMsTUFBTUMsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFxQjtBQUNoQ0MsTUFBSSxDQUFDSixhQUFELENBRE8sRUFFWDtBQUFFSyxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsUUFBSSxFQUFFO0FBQXhCLEdBRlcsQ0FBYjtBQUlBLE1BQU1DLE1BQU0sZ0JBQUdMLDRDQUFLLENBQUNDLGFBQU4sRUFBcUI7QUFDbEMsT0FEYSxFQUViO0FBQ0VLLGFBQVM7QUFEWCxHQUZhLEVBS2JQLElBTGEsQ0FBZjtBQU9BLFNBQ0VNLE1BREY7QUFHRDtLQWZ1QlIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSWNvbnMvTWluaUljb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW5pSWNvbihjb21wb25lbnROYW1lKSB7XG4gIGNvbnN0IEljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KCAvLyBjcmVhdGUgZWxlbWVudCBiYXNlZCBvbiBhIHN0cmluZywgbGlrZSBJb0xvZ29WdWVcbiAgICBldmFsKGNvbXBvbmVudE5hbWUpLFxuICAgIHsgY29sb3I6ICd3aGl0ZScsIHNpemU6ICcxcmVtJyB9XG4gICk7XG4gIGNvbnN0IENpcmNsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoIC8vIGNpcmNsZSBhcm91bmQgdGhlIGljb25cbiAgICAnZGl2JyxcbiAgICB7IFxuICAgICAgY2xhc3NOYW1lOiBgaC02IHctNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS03MDAgc2hhZG93LW1kIHotMzBgXG4gICAgfSxcbiAgICBJY29uXG4gICk7XG4gIHJldHVybiAoXG4gICAgQ2lyY2xlXG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Icons/MiniIcon.js\n");

/***/ })

})