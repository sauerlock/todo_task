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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c4c81a91a683\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjNGM4MWE5MWE2ODNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./app/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_menuUtils_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/menuUtils/menu */ \"(app-pages-browser)/./app/menuUtils/menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button/Button */ \"(app-pages-browser)/./app/components/Button/Button.tsx\");\n/* harmony import */ var _app_menuUtils_Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/menuUtils/Icons */ \"(app-pages-browser)/./app/menuUtils/Icons.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n    width: \",\n        \";\\n    background-color: \",\n        \";\\n    border: 2px solid \",\n        \";\\n    border-radius: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    color: #5cd6ff;\\n    \\n    .user-btn {\\n      .cl-rootBox {\\n        width: 100%\\n        height: 100%\\n      }\\n    }\\n    \\n    .profile {\\n        margin: 1.5rem;\\n        padding: 1rem 1.5rem;\\n        position: relative;\\n        border-radius: 1rem;\\n        cursor: pointer;\\n        font-weight: 300;\\n        color:  #5cd6ff;\\n        display: flex;\\n        align-items: center;\\n        \\n        \\n        .profile-overlay {\\n            position: absolute;\\n            top: 0;\\n            left: 0;\\n            width: 100%;\\n            height: 100%;\\n            backdrop-filter: blur(10px);\\n            z-index: 1;\\n            background: white;\\n            transition: all 0.55s linear;\\n            border-radius: 1rem;\\n            border: 3px dashed #76ddff;\\n            opacity: 0.1;\\n        }\\n\\n        h1 {\\n            font-size: 1.2rem;\\n            display: flex;\\n            flex-direction: column;\\n            line-height: 1.4rem;\\n        }\\n\\n        .image, \\n        h1 {\\n            position: relative;\\n            z-index: 1;\\n        }\\n        \\n        .image {\\n            flex-shrink: 0;\\n            display: inline-block;\\n            overflow: hidden;\\n            transition: all 0.5s ease;\\n            border-radius: 100%;\\n            \\n            width: 70px;\\n            height: 70px;\\n\\n            img {\\n              border-radius: 100%;\\n              transition: all 0.5s ease;\\n            }\\n        }\\n        \\n        > h1 {\\n            margin-left: 0.8rem;\\n            font-size: clamp(1.2rem, 4vw, 1.4rem); \\n            line-height: 100%;\\n        }\\n\\n        &:hover {\\n            color: blue;\\n            .profile-overlay {\\n                opacity: 1;\\n                background-color: \",\n        ';\\n                border: 3px solid navy;\\n                transition: all 0.55s ease;\\n            }\\n    \\n            img {\\n                transform: scale(1.1);\\n            }\\n        }\\n    }\\n    \\n     .nav-item {\\n    position: relative;\\n    padding: 0.8rem 1rem 0.9rem 2.1rem;\\n    margin: 0.3rem 0;\\n\\n    display: grid;\\n    grid-template-columns: 40px 1fr;\\n    cursor: pointer;\\n    align-items: center;\\n\\n    &::after {\\n      position: absolute;\\n      content: \"\";\\n      left: 0;\\n      top: 0;\\n      width: 0;\\n      height: 100%;\\n      background-color: rgba(240, 232, 232, 0.03);\\n      z-index: 1;\\n      transition: all 0.3s ease-in-out;\\n    }\\n\\n    &::before {\\n      position: absolute;\\n      content: \"\";\\n      right: 0;\\n      top: 0;\\n      width: 0%;\\n      height: 100%;\\n      background-color: blue;\\n\\n      border-bottom-left-radius: 5px;\\n      border-top-left-radius: 5px;\\n    }\\n\\n    a {\\n      font-weight: 500;\\n      transition: all 0.3s ease-in-out;\\n      z-index: 2;\\n      line-height: 0;\\n    }\\n\\n    i {\\n      display: flex;\\n      align-items: center;\\n      color:  #5cd6ff;\\n\\n    }\\n\\n    &:hover {\\n      &::after {\\n        width: 100%;\\n      }\\n    }\\n  }\\n\\n  .active {\\n    background-color: black;\\n    i,\\n    a {\\n      color: #2323ff;\\n    }\\n  }\\n\\n  .active::before {\\n    width: 0.3rem;\\n  }\\n\\n  > button {\\n    margin: 1.5rem;\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Sidebar() {\n    _s();\n    const { theme } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { signOut } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useClerk)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const handleClick = (link)=>{\n        router.push(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SidebarStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"profile\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"profile-overlay\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            width: 70,\n                            height: 70,\n                            src: \"/vader.jpeg\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"user-btn absolute z-20 top-0 w-full h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.UserButton, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Darth\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Vader\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"nav-items\",\n                children: _app_menuUtils_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map((item)=>{\n                    const link = item.link;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        className: \"nav-item \".concat(pathName === link ? \"active\" : \"\"),\n                        onClick: ()=>{\n                            handleClick(link);\n                        },\n                        children: [\n                            item.icon,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: link,\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"sign-out relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    name: \"Sign Out\",\n                    type: \"submit\",\n                    padding: \"0.4rem 0.8rem\",\n                    borderRad: \"0.8rem\",\n                    fw: \"500\",\n                    fs: \"1.2rem\",\n                    icon: _app_menuUtils_Icons__WEBPACK_IMPORTED_MODULE_9__.logout,\n                    click: ()=>{\n                        signOut(()=>router.push(\"/signin\"));\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"GKWjho2zW0EoXi1WCCuPs+HkEiI=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.useClerk,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Sidebar;\nconst SidebarStyled = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].nav(_templateObject(), (props)=>props.theme.sidebarWidth, (props)=>props.theme.borderColor2, (props)=>props.theme.borderColor, (props)=>props.theme.borderColor);\n_c1 = SidebarStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c1, \"SidebarStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDUjtBQUNTO0FBQ1g7QUFDNEI7QUFDSztBQUN4QjtBQUNTO0FBQ007QUFHckQsU0FBU1k7O0lBQ0wsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR04sMkVBQWNBO0lBQ2hDLE1BQU1PLFNBQVNSLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVTLE9BQU8sRUFBRSxHQUFHTCx3REFBUUE7SUFFNUIsTUFBTU0sV0FBV1gsNERBQVdBO0lBQzVCLE1BQU1ZLGNBQWMsQ0FBQ0M7UUFDakJKLE9BQU9LLElBQUksQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0U7UUFBY1AsT0FBT0E7OzBCQUNsQiw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3BCLGtEQUFLQTs0QkFBQ3FCLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7NEJBQWNDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNYLHNEQUFVQTs7Ozs7Ozs7OztrQ0FFYiw4REFBQ2dCOzswQ0FDRyw4REFBQ0M7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0E7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ0M7Z0JBQUdQLFdBQVU7MEJBQ1RuQiwyREFBSUEsQ0FBQzJCLEdBQUcsQ0FBQyxDQUFDQztvQkFDUCxNQUFNYixPQUFPYSxLQUFLYixJQUFJO29CQUN0QixxQkFDQSw4REFBQ2M7d0JBRUdWLFdBQVcsWUFBOEMsT0FBbENOLGFBQWFFLE9BQU8sV0FBVzt3QkFDdERlLFNBQVM7NEJBQ1RoQixZQUFZQzt3QkFDaEI7OzRCQUNLYSxLQUFLRyxJQUFJOzBDQUNWLDhEQUFDOUIsaURBQUlBO2dDQUFDK0IsTUFBTWpCOzBDQUFPYSxLQUFLSyxLQUFLOzs7Ozs7O3VCQU54QkwsS0FBS00sRUFBRTs7Ozs7Z0JBU3BCOzs7Ozs7MEJBRUosOERBQUNoQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ2Qsc0RBQU1BO29CQUNIOEIsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkMsU0FBUztvQkFDVEMsV0FBVztvQkFDWEMsSUFBSTtvQkFDSkMsSUFBSTtvQkFDSlQsTUFBTXpCLHdEQUFNQTtvQkFDWm1DLE9BQU87d0JBQ0g3QixRQUFRLElBQU1ELE9BQU9LLElBQUksQ0FBQztvQkFDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBMURTUDs7UUFDYUwsdUVBQWNBO1FBQ2pCRCxzREFBU0E7UUFFSkksb0RBQVFBO1FBRVhMLHdEQUFXQTs7O0tBTnZCTztBQTREVCxNQUFNUSxnQkFBZ0JuQiwwREFBTUEsQ0FBQzRDLEdBQUcsb0JBRW5CLENBQUNDLFFBQVVBLE1BQU1qQyxLQUFLLENBQUNrQyxZQUFZLEVBQ3hCLENBQUNELFFBQVVBLE1BQU1qQyxLQUFLLENBQUNtQyxZQUFZLEVBQ25DLENBQUNGLFFBQVVBLE1BQU1qQyxLQUFLLENBQUNvQyxXQUFXLEVBZ0Z0QixDQUFDSCxRQUFVQSxNQUFNakMsS0FBSyxDQUFDb0MsV0FBVztNQXBGaEU3QjtBQXdLTiwrREFBZVIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4P2QyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCJAL2FwcC9tZW51VXRpbHMvbWVudVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvZ2xvYmFsUHJvdmlkZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiQC9hcHAvbWVudVV0aWxzL0ljb25zXCI7XHJcbmltcG9ydCB7IHVzZUNsZXJrLCBVc2VyQnV0dG9uIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHNpZ25PdXQgfSA9IHVzZUNsZXJrKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGxpbms6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2gobGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGViYXJTdHlsZWQgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NzB9IGhlaWdodD17NzB9IHNyYz1cIi92YWRlci5qcGVnXCIgYWx0PVwicHJvZmlsZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWJ0biBhYnNvbHV0ZSB6LTIwIHRvcC0wIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPFVzZXJCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhcnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBpdGVtLmxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtwYXRoTmFtZSA9PT0gbGluayA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sobGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tb3V0IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJTaWduIE91dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wic3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17XCIwLjRyZW0gMC44cmVtXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkPXtcIjAuOHJlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGZ3PXtcIjUwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGZzPXtcIjEuMnJlbVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKCkgPT4gcm91dGVyLnB1c2goXCIvc2lnbmluXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TaWRlYmFyU3R5bGVkPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyU3R5bGVkID0gc3R5bGVkLm5hdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ib3JkZXJDb2xvcjJ9O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJvcmRlckNvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiAjNWNkNmZmO1xyXG4gICAgXHJcbiAgICAudXNlci1idG4ge1xyXG4gICAgICAuY2wtcm9vdEJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICAjNWNkNmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucHJvZmlsZS1vdmVybGF5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjU1cyBsaW5lYXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IGRhc2hlZCAjNzZkZGZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLCBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA+IGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDR2dywgMS40cmVtKTsgXHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAucHJvZmlsZS1vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYm9yZGVyQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjU1cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgIC5uYXYtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbSAwLjlyZW0gMi4xcmVtO1xyXG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDIzMiwgMjMyLCAwLjAzKTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAgIzVjZDZmZjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGksXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICMyMzIzZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMS41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1hZ2UiLCJtZW51IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlR2xvYmFsU3RhdGUiLCJCdXR0b24iLCJsb2dvdXQiLCJ1c2VDbGVyayIsIlVzZXJCdXR0b24iLCJTaWRlYmFyIiwidGhlbWUiLCJyb3V0ZXIiLCJzaWduT3V0IiwicGF0aE5hbWUiLCJoYW5kbGVDbGljayIsImxpbmsiLCJwdXNoIiwiU2lkZWJhclN0eWxlZCIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiaWNvbiIsImhyZWYiLCJ0aXRsZSIsImlkIiwibmFtZSIsInR5cGUiLCJwYWRkaW5nIiwiYm9yZGVyUmFkIiwiZnciLCJmcyIsImNsaWNrIiwibmF2IiwicHJvcHMiLCJzaWRlYmFyV2lkdGgiLCJib3JkZXJDb2xvcjIiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx\n"));

/***/ })

});