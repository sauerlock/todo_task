"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b32a7826eebf\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiMzJhNzgyNmVlYmZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./app/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_utils_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/menu */ \"(app-pages-browser)/./app/utils/menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n    width: \",\n        \";\\n    background-color: \",\n        \";\\n    border: 3px solid \",\n        \";\\n    border-radius: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    color: red;\\n      \\n    .profile {\\n        margin: 1.5rem;\\n        padding: 1rem 1.5rem;\\n        position: relative;\\n        border-radius: 1rem;\\n        cursor: pointer;\\n        font-weight: 300;\\n        color: darkred;\\n        display: flex;\\n        align-items: center;\\n        \\n        .profile-overlay {\\n            position: absolute;\\n            top: 0;\\n            left: 0;\\n            width: 100%;\\n            height: 100%;\\n            backdrop-filter: blur(10px);\\n            z-index: 1;\\n            background: \",\n        \";\\n            transition: all 0.55s liner;\\n            border-radius: 1rem;\\n            border: 1px solid \",\n        ';\\n            opacity: 0.2;\\n        }\\n\\n        h1 {\\n            font-size: 1.2rem;\\n            display: flex;\\n            flex-direction: column;\\n            line-height: 1.4rem;\\n        }\\n\\n        .image, \\n        h1 {\\n            position: relative;\\n            z-index: 1;\\n        }\\n        \\n        .image {\\n            flex-shrink: 0;\\n            display: inline-block;\\n            overflow: hidden;\\n            transition: all 0.5s ease;\\n            border-radius: 100%;\\n\\n            width: 70px;\\n            height: 70px;\\n\\n            img {\\n              border-radius: 100%;\\n              transition: all 0.5s ease;\\n            }\\n        }\\n        \\n        > h1 {\\n            margin-left: 0.8rem;\\n            font-size: clamp(1.2rem, 4vw, 1.4rem); \\n            line-height: 100%;\\n        }\\n\\n        &:hover {\\n            .profile-overlay {\\n                opacity: 1;\\n                background-color: darkred;\\n                border: 1px solid red;\\n                transition: all 0.40s ease;\\n            }\\n    \\n            .image {\\n                transform: scale(1.2);\\n            }\\n\\n            h1 {\\n                color: red;\\n                font-weight: 200;\\n                transition: all 0.40s ease;\\n            }\\n        }\\n    }\\n    \\n    .nav-item {\\n        position: relative;\\n        padding: 0.8rem 1rem 0.9rem 2.1rem;\\n        margin: 0.4rem 0;\\n        display: grid;\\n        grid-template-columns: 40px 1fr;\\n        cursor: pointer;\\n        align-items: center;\\n\\n        &::after {\\n            position: absolute;\\n            content: \"\";\\n            left: 0;\\n            top: 0;\\n            width: 0;\\n            height: 100%;\\n            background-color: ',\n        ';\\n            z-index: 1;\\n            transition: all 0.3s ease-in-out;\\n        }\\n\\n        &::before {\\n            position: absolute;\\n            content: \"\";\\n            right: 0;\\n            top: 0;\\n            width: 0%;\\n            height: 100%;\\n            background-color: red;\\n            border-bottom-left-radius: 5px;\\n            border-top-left-radius: 5px;\\n        }\\n\\n        a {\\n            font-weight: 500;\\n            transition: all 0.3s ease-in-out;\\n            z-index: 2;\\n            line-height: 0;\\n            color: darkred;\\n        }\\n\\n        i {\\n            display: flex;\\n            align-items: center;\\n            color: darkred;\\n        }\\n        &:hover {\\n            &::after {\\n                width:100%;\\n            }\\n        }\\n    }\\n    .active {\\n        background-color: ',\n        \";\\n        \\n        i,\\n        a{\\n            color: red;\\n        }\\n    }\\n    .active::before{\\n        width: 0.3rem;\\n    }\\n\\n    >button{\\n        1.5rem;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Sidebar() {\n    _s();\n    const { theme } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const handleClick = (link)=>{\n        router.push(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SidebarStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"profile\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"profile-overlay\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            width: 70,\n                            height: 70,\n                            src: \"/vader.jpeg\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Darth\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Vader\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"nav-items\",\n                children: _app_utils_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map((item)=>{\n                    const link = item.link;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        className: \"nav-item \".concat(pathName === link ? \"active\" : \"\"),\n                        onClick: ()=>{\n                            handleClick(link);\n                        },\n                        children: [\n                            item.icon,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: link,\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"l1udeEwo62BAy06/JpoXnkFa9sQ=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Sidebar;\nconst SidebarStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nav(_templateObject(), (props)=>props.theme.sidebarWidth, (props)=>props.theme.colorBg4, (props)=>props.theme.borderColor, (props)=>props.theme.colorBg3, (props)=>props.theme.colorBg4, (props)=>props.theme.activeNavLinkHover, (props)=>props.theme.colorBg3);\n_c1 = SidebarStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c1, \"SidebarStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDUjtBQUNLO0FBQ1A7QUFDNEI7QUFDSztBQUU5RCxTQUFTUTs7SUFDTCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRiwyRUFBY0E7SUFDaEMsTUFBTUcsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNTyxjQUFjLENBQUNDO1FBQ2pCSCxPQUFPSSxJQUFJLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNFO1FBQWNOLE9BQU9BOzswQkFDbEIsOERBQUNPO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNmLGtEQUFLQTs0QkFBQ2dCLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7NEJBQWNDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ0M7OzBDQUNHLDhEQUFDQzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDQztnQkFBR1AsV0FBVTswQkFDVGQsdURBQUlBLENBQUNzQixHQUFHLENBQUMsQ0FBQ0M7b0JBQ1AsTUFBTWIsT0FBT2EsS0FBS2IsSUFBSTtvQkFDdEIscUJBQ0EsOERBQUNjO3dCQUNHVixXQUFXLFlBQThDLE9BQWxDTixhQUFhRSxPQUFPLFdBQVc7d0JBQ3REZSxTQUFTOzRCQUNUaEIsWUFBWUM7d0JBQ2hCOzs0QkFDS2EsS0FBS0csSUFBSTswQ0FDViw4REFBQ3pCLGlEQUFJQTtnQ0FBQzBCLE1BQU1qQjswQ0FBT2EsS0FBS0ssS0FBSzs7Ozs7Ozs7Ozs7O2dCQUdyQzs7Ozs7OzBCQUVKLDhEQUFDQzs7Ozs7Ozs7Ozs7QUFHYjtHQXRDU3hCOztRQUNhRCx1RUFBY0E7UUFDakJELHNEQUFTQTtRQUNQRCx3REFBV0E7OztLQUh2Qkc7QUF3Q1QsTUFBTU8sZ0JBQWdCZCx5REFBTUEsQ0FBQ2dDLEdBQUcsb0JBRW5CLENBQUNDLFFBQVVBLE1BQU16QixLQUFLLENBQUMwQixZQUFZLEVBQ3hCLENBQUNELFFBQVVBLE1BQU16QixLQUFLLENBQUMyQixRQUFRLEVBQy9CLENBQUNGLFFBQVVBLE1BQU16QixLQUFLLENBQUM0QixXQUFXLEVBMEJoQyxDQUFDSCxRQUFVQSxNQUFNekIsS0FBSyxDQUFDNkIsUUFBUSxFQUd6QixDQUFDSixRQUFVQSxNQUFNekIsS0FBSyxDQUFDMkIsUUFBUSxFQTJFL0IsQ0FBQ0YsUUFBVUEsTUFBTXpCLEtBQUssQ0FBQzhCLGtCQUFrQixFQXFDN0MsQ0FBQ0wsUUFBVUEsTUFBTXpCLEtBQUssQ0FBQzZCLFFBQVE7TUFqSnJEdkI7QUFrS04sK0RBQWVQLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLnRzeD9kMjZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiQC9hcHAvdXRpbHMvbWVudVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvZ2xvYmFsUHJvdmlkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChsaW5rOnN0cmluZykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGxpbmspO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaWRlYmFyU3R5bGVkIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSBzcmM9XCIvdmFkZXIuanBlZ1wiIGFsdD1cInByb2ZpbGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXJ0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gaXRlbS5saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtaXRlbSAke3BhdGhOYW1lID09PSBsaW5rID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayhsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgPC9TaWRlYmFyU3R5bGVkPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuY29uc3QgU2lkZWJhclN0eWxlZCA9IHN0eWxlZC5uYXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNpZGViYXJXaWR0aH07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JCZzR9O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIFxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIG1hcmdpbjogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAucHJvZmlsZS1vdmVybGF5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9yQmczfTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNTVzIGxpbmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JCZzR9O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLCBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA+IGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDR2dywgMS40cmVtKTsgXHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLW92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40MHMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNDBzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtIDAuOXJlbSAyLjFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjRyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5hY3RpdmVOYXZMaW5rSG92ZXJ9O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya3JlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya3JlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JCZzN9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGksXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlOjpiZWZvcmV7XHJcbiAgICAgICAgd2lkdGg6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICA+YnV0dG9ue1xyXG4gICAgICAgIDEuNXJlbTtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkltYWdlIiwibWVudSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsInVzZUdsb2JhbFN0YXRlIiwiU2lkZWJhciIsInRoZW1lIiwicm91dGVyIiwicGF0aE5hbWUiLCJoYW5kbGVDbGljayIsImxpbmsiLCJwdXNoIiwiU2lkZWJhclN0eWxlZCIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiaWNvbiIsImhyZWYiLCJ0aXRsZSIsImJ1dHRvbiIsIm5hdiIsInByb3BzIiwic2lkZWJhcldpZHRoIiwiY29sb3JCZzQiLCJib3JkZXJDb2xvciIsImNvbG9yQmczIiwiYWN0aXZlTmF2TGlua0hvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx\n"));

/***/ })

});