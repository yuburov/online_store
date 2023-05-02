"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/catalog/CatalogPagination.tsx":
/*!*********************************************************!*\
  !*** ./src/components/ui/catalog/CatalogPagination.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_item_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item/ProductItem */ \"./src/components/ui/catalog/product-item/ProductItem.tsx\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Heading */ \"./src/components/ui/Heading.tsx\");\n/* harmony import */ var _SortDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortDropDown */ \"./src/components/ui/catalog/SortDropDown.tsx\");\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ \"./src/components/ui/button/Button.tsx\");\n/* harmony import */ var _services_products_product_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/products/product.interface */ \"./src/services/products/product.interface.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/products/product.service */ \"./src/services/products/product.service.ts\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ \"./src/components/ui/Loader.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst CatalogPagination = (param)=>{\n    let { data , title  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const { push  } = router;\n    const { page  } = router.query;\n    const [pageN, setPageN] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [sortType, setSortType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_products_product_interface__WEBPACK_IMPORTED_MODULE_6__.EnumProductSort.NEWEST);\n    const { data: res , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({\n        queryKey: [\n            \"product\",\n            sortType,\n            pageN\n        ],\n        queryFn: ()=>_services_products_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService.getAll({\n                pageN,\n                perPage: 4,\n                sort: sortType\n            }),\n        initialData: data\n    });\n    const changePage = (pageNumber)=>{\n        setPageN(pageNumber);\n        push(\"http://localhost:3000?page=\".concat(pageNumber));\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n        lineNumber: 43,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"mb-5\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sortType: sortType,\n                setSortType: setSortType\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            (res === null || res === void 0 ? void 0 : res.products.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 gap-10\",\n                        children: res.products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-16\",\n                        children: Array.from({\n                            length: res.length / 4\n                        }).map((_, index)=>{\n                            const pageNumber = index + 1;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: \"sm\",\n                                variant: pageN === pageNumber ? \"orange\" : \"white\",\n                                onClick: ()=>changePage(pageNumber),\n                                className: \"mx-3\",\n                                children: pageNumber\n                            }, pageNumber, false, {\n                                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There are not products\"\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CatalogPagination, \"c8pO8XBkfteS8BKAvtkmVHEMhBs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c = CatalogPagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatalogPagination);\nvar _c;\n$RefreshReg$(_c, \"CatalogPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9jYXRhbG9nL0NhdGFsb2dQYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNxQztBQUNnQjtBQUNwQjtBQUNTO0FBQ0o7QUFDa0M7QUFDdkI7QUFDb0I7QUFDdEM7QUFDUztBQU94QyxNQUFNVSxvQkFBa0MsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUU7O0lBQ3RELE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLEtBQUksRUFBRSxHQUFHRDtJQUNqQixNQUFNLEVBQUVFLEtBQUksRUFBRSxHQUFHRixPQUFPRyxLQUFLO0lBQzdCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQ3RDSyx3RkFBc0I7SUFHeEIsTUFBTSxFQUFFTSxNQUFNVyxJQUFHLEVBQUVDLFVBQVMsRUFBRSxHQUFHakIsZ0VBQVFBLENBQUM7UUFDeENrQixVQUFVO1lBQUM7WUFBV0w7WUFBVUY7U0FBTTtRQUN0Q1EsU0FBUyxJQUNQbEIscUZBQXFCLENBQUM7Z0JBQ3BCVTtnQkFDQVUsU0FBUztnQkFDVEMsTUFBTVQ7WUFDUjtRQUNGVSxhQUFhbEI7SUFDZjtJQUVBLE1BQU1tQixhQUFhLENBQUNDLGFBQXVCO1FBQ3pDYixTQUFTYTtRQUNUakIsS0FBSyw4QkFBeUMsT0FBWGlCO0lBQ3JDO0lBRUEsSUFBSVIsV0FBVyxxQkFBTyw4REFBQ2YsK0NBQU1BOzs7OztJQUM3QixxQkFDRSw4REFBQ3dCOztZQUNFcEIsdUJBQVMsOERBQUNWLGdEQUFPQTtnQkFBQytCLFdBQVU7MEJBQVFyQjs7Ozs7OzBCQUNyQyw4REFBQ1QscURBQVlBO2dCQUFDZ0IsVUFBVUE7Z0JBQVVDLGFBQWFBOzs7Ozs7WUFDOUNFLENBQUFBLGdCQUFBQSxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBS1ksUUFBUSxDQUFDQyxNQUFNLGtCQUNuQjs7a0NBQ0UsOERBQUNDO3dCQUFJSCxXQUFVO2tDQUNaWCxJQUFJWSxRQUFRLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyx3QkFDakIsOERBQUNyQyxpRUFBV0E7Z0NBQWtCcUMsU0FBU0E7K0JBQXJCQSxRQUFRQyxFQUFFOzs7Ozs7Ozs7O2tDQUdoQyw4REFBQ0g7d0JBQUlILFdBQVU7a0NBQ1pPLE1BQU1DLElBQUksQ0FBQzs0QkFBRU4sUUFBUWIsSUFBSWEsTUFBTSxHQUFHO3dCQUFFLEdBQUdFLEdBQUcsQ0FBQyxDQUFDSyxHQUFHQyxRQUFVOzRCQUN4RCxNQUFNWixhQUFhWSxRQUFROzRCQUMzQixxQkFDRSw4REFBQ3ZDLHNEQUFNQTtnQ0FFTHdDLE1BQUs7Z0NBQ0xDLFNBQVM1QixVQUFVYyxhQUFhLFdBQVcsT0FBTztnQ0FDbERlLFNBQVMsSUFBTWhCLFdBQVdDO2dDQUMxQkUsV0FBVTswQ0FFVEY7K0JBTklBOzs7Ozt3QkFTWDs7Ozs7Ozs2Q0FJSiw4REFBQ0s7MEJBQUk7Ozs7O3lCQUNOOzs7Ozs7O0FBR1A7R0EzRE0xQjs7UUFDV0Qsa0RBQVNBO1FBUVNILDREQUFRQTs7O0tBVHJDSTtBQTZETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL2NhdGFsb2cvQ2F0YWxvZ1BhZ2luYXRpb24udHN4PzhkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2luYXRpb25Qcm9kdWN0LCBJUHJvZHVjdCB9IGZyb20gXCJAL2ludGVyZmFjZXMvcHJvZHVjdC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL3Byb2R1Y3QtaXRlbS9Qcm9kdWN0SXRlbVwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL0hlYWRpbmdcIjtcbmltcG9ydCBTb3J0RHJvcERvd24gZnJvbSBcIi4vU29ydERyb3BEb3duXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBFbnVtUHJvZHVjdFNvcnQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9wcm9kdWN0cy9wcm9kdWN0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3Quc2VydmljZVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vTG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmludGVyZmFjZSBJQ2F0YWxvZyB7XG4gIGRhdGE6IElQYWdpbmF0aW9uUHJvZHVjdDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhdGFsb2dQYWdpbmF0aW9uOiBGQzxJQ2F0YWxvZz4gPSAoeyBkYXRhLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcHVzaCB9ID0gcm91dGVyXG4gIGNvbnN0IHsgcGFnZSB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtwYWdlTiwgc2V0UGFnZU5dID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGU8RW51bVByb2R1Y3RTb3J0PihcbiAgICBFbnVtUHJvZHVjdFNvcnQuTkVXRVNUXG4gICk7XG5cbiAgY29uc3QgeyBkYXRhOiByZXMsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJwcm9kdWN0XCIsIHNvcnRUeXBlLCBwYWdlTl0sXG4gICAgcXVlcnlGbjogKCkgPT5cbiAgICAgIFByb2R1Y3RTZXJ2aWNlLmdldEFsbCh7XG4gICAgICAgIHBhZ2VOLFxuICAgICAgICBwZXJQYWdlOiA0LFxuICAgICAgICBzb3J0OiBzb3J0VHlwZSxcbiAgICAgIH0pLFxuICAgIGluaXRpYWxEYXRhOiBkYXRhLFxuICB9KTtcblxuICBjb25zdCBjaGFuZ2VQYWdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2VOKHBhZ2VOdW1iZXIpXG4gICAgcHVzaChgaHR0cDovL2xvY2FsaG9zdDozMDAwP3BhZ2U9JHtwYWdlTnVtYmVyfWApXG4gIH1cblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRlciAvPjtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHt0aXRsZSAmJiA8SGVhZGluZyBjbGFzc05hbWU9XCJtYi01XCI+e3RpdGxlfTwvSGVhZGluZz59XG4gICAgICA8U29ydERyb3BEb3duIHNvcnRUeXBlPXtzb3J0VHlwZX0gc2V0U29ydFR5cGU9e3NldFNvcnRUeXBlfSAvPlxuICAgICAge3Jlcz8ucHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtMTBcIj5cbiAgICAgICAgICAgIHtyZXMucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTE2XCI+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogcmVzLmxlbmd0aCAvIDQgfSkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtwYWdlTiA9PT0gcGFnZU51bWJlciA/IFwib3JhbmdlXCIgOiBcIndoaXRlXCJ9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtM1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlRoZXJlIGFyZSBub3QgcHJvZHVjdHM8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ1BhZ2luYXRpb247XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcm9kdWN0SXRlbSIsIkhlYWRpbmciLCJTb3J0RHJvcERvd24iLCJCdXR0b24iLCJFbnVtUHJvZHVjdFNvcnQiLCJ1c2VRdWVyeSIsIlByb2R1Y3RTZXJ2aWNlIiwiTG9hZGVyIiwidXNlUm91dGVyIiwiQ2F0YWxvZ1BhZ2luYXRpb24iLCJkYXRhIiwidGl0bGUiLCJyb3V0ZXIiLCJwdXNoIiwicGFnZSIsInF1ZXJ5IiwicGFnZU4iLCJzZXRQYWdlTiIsInNvcnRUeXBlIiwic2V0U29ydFR5cGUiLCJORVdFU1QiLCJyZXMiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJnZXRBbGwiLCJwZXJQYWdlIiwic29ydCIsImluaXRpYWxEYXRhIiwiY2hhbmdlUGFnZSIsInBhZ2VOdW1iZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJzaXplIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/catalog/CatalogPagination.tsx\n"));

/***/ })

});