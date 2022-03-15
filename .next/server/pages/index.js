"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ Blogs)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst space = \"dxnbkq7oz2az\";\nconst accessToken = \"dr1xoqMlATUyFQCPkGObBrBplNcY2fOF47O5M9IM93o\";\nasync function getStaticProps() {\n    const client = (0,contentful__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n        space: space,\n        accessToken: accessToken\n    });\n    const res = await client.getEntries({\n        content_type: 'blogPost'\n    });\n    return {\n        props: {\n            blogs: res.items\n        }\n    };\n}\nfunction Blogs({ blogs  }) {\n    console.log(blogs);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" Working hard\",\n            blogs.map((blog)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        blog.fields.blogTitle,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: blog.fields.blogPostContent.content[0].content[0].value\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanpynes/next-js-test/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 57\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: blog.fields.blogPostContentPhoto.fields.file.url\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathanpynes/next-js-test/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 122\n                        }, this)\n                    ]\n                }, blog.sys.id, true, {\n                    fileName: \"/Users/jonathanpynes/next-js-test/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/Users/jonathanpynes/next-js-test/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jonathanpynes/next-js-test/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRXpDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHQyxjQUEyQztBQUN6RCxLQUFLLENBQUNHLFdBQVcsR0FBR0gsNkNBQStDO0FBRTVELGVBQWVLLGNBQWMsR0FBRyxDQUFDO0lBRXRDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHUix3REFBWSxDQUFDLENBQUM7UUFDN0JDLEtBQUssRUFBRUEsS0FBSztRQUNaSSxXQUFXLEVBQUVBLFdBQVc7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQ0ksR0FBRyxHQUFHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsQ0FBQztRQUFDQyxZQUFZLEVBQUUsQ0FBVTtJQUFBLENBQUM7SUFFL0QsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTkMsS0FBSyxFQUFFSixHQUFHLENBQUNLLEtBQUs7UUFDbEIsQ0FBQztJQUNGLENBQUM7QUFFRixDQUFDO0FBRWMsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDRixLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLO0lBQ2YsTUFBTSw2RUFDSEssQ0FBRzs7WUFBQyxDQUNIO1lBQUNMLEtBQUssQ0FBQ00sR0FBRyxFQUFDQyxJQUFJLCtFQUNaRixDQUFHOzt3QkFBbUIsQ0FBQzt3QkFBQ0UsSUFBSSxDQUFDQyxNQUFNLENBQUNDLFNBQVM7d0JBQUMsQ0FBQztvR0FBQ0MsQ0FBQztzQ0FBRUgsSUFBSSxDQUFDQyxNQUFNLENBQUNHLGVBQWUsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsRUFBRUEsT0FBTyxDQUFDLENBQUMsRUFBRUMsS0FBSzs7Ozs7O3dCQUFLLENBQUM7b0dBQUNDLENBQUc7NEJBQUNDLEdBQUcsRUFBRVIsSUFBSSxDQUFDQyxNQUFNLENBQUNRLG9CQUFvQixDQUFDUixNQUFNLENBQUNTLElBQUksQ0FBQ0MsR0FBRzs7Ozs7OzttQkFBaktYLElBQUksQ0FBQ1ksR0FBRyxDQUFDQyxFQUFFOzs7Ozs7d0ZBRXRCVixDQUFDOzs7Ozs7Ozs7OztBQUdSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ2NvbnRlbnRmdWwnXG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRFxuY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIFxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzcGFjZTogc3BhY2UsXG4gIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbn0pXG5cbmNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnfSlcblxucmV0dXJuIHtcbiAgcHJvcHM6IHtcbiAgICBibG9nczogcmVzLml0ZW1zXG4gIH1cbiB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ3MoeyBibG9ncyB9KSB7XG5jb25zb2xlLmxvZyhibG9ncylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PiBXb3JraW5nIGhhcmRcbiAgICAgIHtibG9ncy5tYXAoYmxvZyA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtibG9nLnN5cy5pZH0+IHtibG9nLmZpZWxkcy5ibG9nVGl0bGV9IDxwPntibG9nLmZpZWxkcy5ibG9nUG9zdENvbnRlbnQuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlfTwvcD4gPGltZyBzcmM9e2Jsb2cuZmllbGRzLmJsb2dQb3N0Q29udGVudFBob3RvLmZpZWxkcy5maWxlLnVybH0vPjwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8cD48L3A+XG4gICAgICAgPC9kaXY+XG4gIClcbn0gXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4iLCJnZXRTdGF0aWNQcm9wcyIsImNsaWVudCIsInJlcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJwcm9wcyIsImJsb2dzIiwiaXRlbXMiLCJCbG9ncyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJibG9nIiwiZmllbGRzIiwiYmxvZ1RpdGxlIiwicCIsImJsb2dQb3N0Q29udGVudCIsImNvbnRlbnQiLCJ2YWx1ZSIsImltZyIsInNyYyIsImJsb2dQb3N0Q29udGVudFBob3RvIiwiZmlsZSIsInVybCIsInN5cyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();