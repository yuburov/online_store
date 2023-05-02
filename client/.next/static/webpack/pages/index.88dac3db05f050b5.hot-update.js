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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_item_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item/ProductItem */ \"./src/components/ui/catalog/product-item/ProductItem.tsx\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Heading */ \"./src/components/ui/Heading.tsx\");\n/* harmony import */ var _SortDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortDropDown */ \"./src/components/ui/catalog/SortDropDown.tsx\");\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ \"./src/components/ui/button/Button.tsx\");\n/* harmony import */ var _services_products_product_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/products/product.interface */ \"./src/services/products/product.interface.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/products/product.service */ \"./src/services/products/product.service.ts\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ \"./src/components/ui/Loader.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst CatalogPagination = (param)=>{\n    let { data , title  } = param;\n    _s();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [sortType, setSortType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_products_product_interface__WEBPACK_IMPORTED_MODULE_6__.EnumProductSort.NEWEST);\n    const { data: res , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({\n        queryKey: [\n            \"product\",\n            sortType,\n            page\n        ],\n        queryFn: ()=>_services_products_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService.getAll({\n                page,\n                perPage: 4,\n                sort: sortType\n            }),\n        initialData: data\n    });\n    const changePage = (pageNumber)=>{\n        push(\"http://localhost:3000?page=\".concat(pageNumber));\n        setPage(pageNumber);\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n        lineNumber: 41,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"mb-5\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sortType: sortType,\n                setSortType: setSortType\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            (res === null || res === void 0 ? void 0 : res.products.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 gap-10\",\n                        children: res.products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-16\",\n                        children: Array.from({\n                            length: res.length / 4\n                        }).map((_, index)=>{\n                            const pageNumber = index + 1;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: \"sm\",\n                                variant: page === pageNumber ? \"orange\" : \"white\",\n                                onClick: ()=>changePage(pageNumber),\n                                className: \"mx-3\",\n                                children: pageNumber\n                            }, pageNumber, false, {\n                                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There are not products\"\n            }, void 0, false, {\n                fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/darideal/projects/amazone_store/client/src/components/ui/catalog/CatalogPagination.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CatalogPagination, \"sqtJ90Hi0jmi1r3+4IAwzUWdQYQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c = CatalogPagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatalogPagination);\nvar _c;\n$RefreshReg$(_c, \"CatalogPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9jYXRhbG9nL0NhdGFsb2dQYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNxQztBQUNnQjtBQUNwQjtBQUNTO0FBQ0o7QUFDa0M7QUFDdkI7QUFDb0I7QUFDdEM7QUFDUztBQU94QyxNQUFNVSxvQkFBa0MsU0FBcUI7UUFBcEIsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUU7O0lBQ3RELE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUMxQixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR2YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQ3RDSyx3RkFBc0I7SUFHeEIsTUFBTSxFQUFFTSxNQUFNUSxJQUFHLEVBQUVDLFVBQVMsRUFBRSxHQUFHZCxnRUFBUUEsQ0FBQztRQUN4Q2UsVUFBVTtZQUFDO1lBQVdMO1lBQVVGO1NBQUs7UUFDckNRLFNBQVMsSUFDUGYscUZBQXFCLENBQUM7Z0JBQ3BCTztnQkFDQVUsU0FBUztnQkFDVEMsTUFBTVQ7WUFDUjtRQUNGVSxhQUFhZjtJQUNmO0lBRUEsTUFBTWdCLGFBQWEsQ0FBQ0MsYUFBdUI7UUFDekNmLEtBQUssOEJBQXlDLE9BQVhlO1FBQ25DYixRQUFRYTtJQUNWO0lBRUEsSUFBSVIsV0FBVyxxQkFBTyw4REFBQ1osK0NBQU1BOzs7OztJQUM3QixxQkFDRSw4REFBQ3FCOztZQUNFakIsdUJBQVMsOERBQUNWLGdEQUFPQTtnQkFBQzRCLFdBQVU7MEJBQVFsQjs7Ozs7OzBCQUNyQyw4REFBQ1QscURBQVlBO2dCQUFDYSxVQUFVQTtnQkFBVUMsYUFBYUE7Ozs7OztZQUM5Q0UsQ0FBQUEsZ0JBQUFBLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFLWSxRQUFRLENBQUNDLE1BQU0sa0JBQ25COztrQ0FDRSw4REFBQ0M7d0JBQUlILFdBQVU7a0NBQ1pYLElBQUlZLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLENBQUNDLHdCQUNqQiw4REFBQ2xDLGlFQUFXQTtnQ0FBa0JrQyxTQUFTQTsrQkFBckJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7a0NBR2hDLDhEQUFDSDt3QkFBSUgsV0FBVTtrQ0FDWk8sTUFBTUMsSUFBSSxDQUFDOzRCQUFFTixRQUFRYixJQUFJYSxNQUFNLEdBQUc7d0JBQUUsR0FBR0UsR0FBRyxDQUFDLENBQUNLLEdBQUdDLFFBQVU7NEJBQ3hELE1BQU1aLGFBQWFZLFFBQVE7NEJBQzNCLHFCQUNFLDhEQUFDcEMsc0RBQU1BO2dDQUVMcUMsTUFBSztnQ0FDTEMsU0FBUzVCLFNBQVNjLGFBQWEsV0FBVyxPQUFPO2dDQUNqRGUsU0FBUyxJQUFNaEIsV0FBV0M7Z0NBQzFCRSxXQUFVOzBDQUVURjsrQkFOSUE7Ozs7O3dCQVNYOzs7Ozs7OzZDQUlKLDhEQUFDSzswQkFBSTs7Ozs7eUJBQ047Ozs7Ozs7QUFHUDtHQXpETXZCOztRQUNhRCxrREFBU0E7UUFNT0gsNERBQVFBOzs7S0FQckNJO0FBMkROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvY2F0YWxvZy9DYXRhbG9nUGFnaW5hdGlvbi50c3g/OGQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUGFnaW5hdGlvblByb2R1Y3QsIElQcm9kdWN0IH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9wcm9kdWN0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4vcHJvZHVjdC1pdGVtL1Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vSGVhZGluZ1wiO1xuaW1wb3J0IFNvcnREcm9wRG93biBmcm9tIFwiLi9Tb3J0RHJvcERvd25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCB7IEVudW1Qcm9kdWN0U29ydCB9IGZyb20gXCJAL3NlcnZpY2VzL3Byb2R1Y3RzL3Byb2R1Y3QuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvcHJvZHVjdHMvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIElDYXRhbG9nIHtcbiAgZGF0YTogSVBhZ2luYXRpb25Qcm9kdWN0O1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgQ2F0YWxvZ1BhZ2luYXRpb246IEZDPElDYXRhbG9nPiA9ICh7IGRhdGEsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3NvcnRUeXBlLCBzZXRTb3J0VHlwZV0gPSB1c2VTdGF0ZTxFbnVtUHJvZHVjdFNvcnQ+KFxuICAgIEVudW1Qcm9kdWN0U29ydC5ORVdFU1RcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IHJlcywgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFtcInByb2R1Y3RcIiwgc29ydFR5cGUsIHBhZ2VdLFxuICAgIHF1ZXJ5Rm46ICgpID0+XG4gICAgICBQcm9kdWN0U2VydmljZS5nZXRBbGwoe1xuICAgICAgICBwYWdlLFxuICAgICAgICBwZXJQYWdlOiA0LFxuICAgICAgICBzb3J0OiBzb3J0VHlwZSxcbiAgICAgIH0pLFxuICAgIGluaXRpYWxEYXRhOiBkYXRhLFxuICB9KTtcblxuICBjb25zdCBjaGFuZ2VQYWdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIHB1c2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMD9wYWdlPSR7cGFnZU51bWJlcn1gKVxuICAgIHNldFBhZ2UocGFnZU51bWJlcilcbiAgfVxuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8TG9hZGVyIC8+O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge3RpdGxlICYmIDxIZWFkaW5nIGNsYXNzTmFtZT1cIm1iLTVcIj57dGl0bGV9PC9IZWFkaW5nPn1cbiAgICAgIDxTb3J0RHJvcERvd24gc29ydFR5cGU9e3NvcnRUeXBlfSBzZXRTb3J0VHlwZT17c2V0U29ydFR5cGV9IC8+XG4gICAgICB7cmVzPy5wcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0xMFwiPlxuICAgICAgICAgICAge3Jlcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTZcIj5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiByZXMubGVuZ3RoIC8gNCB9KS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3BhZ2UgPT09IHBhZ2VOdW1iZXIgPyBcIm9yYW5nZVwiIDogXCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5UaGVyZSBhcmUgbm90IHByb2R1Y3RzPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGFsb2dQYWdpbmF0aW9uO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUHJvZHVjdEl0ZW0iLCJIZWFkaW5nIiwiU29ydERyb3BEb3duIiwiQnV0dG9uIiwiRW51bVByb2R1Y3RTb3J0IiwidXNlUXVlcnkiLCJQcm9kdWN0U2VydmljZSIsIkxvYWRlciIsInVzZVJvdXRlciIsIkNhdGFsb2dQYWdpbmF0aW9uIiwiZGF0YSIsInRpdGxlIiwicHVzaCIsInBhZ2UiLCJzZXRQYWdlIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsIk5FV0VTVCIsInJlcyIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldEFsbCIsInBlclBhZ2UiLCJzb3J0IiwiaW5pdGlhbERhdGEiLCJjaGFuZ2VQYWdlIiwicGFnZU51bWJlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwcm9kdWN0cyIsImxlbmd0aCIsImRpdiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpbmRleCIsInNpemUiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/catalog/CatalogPagination.tsx\n"));

/***/ })

});