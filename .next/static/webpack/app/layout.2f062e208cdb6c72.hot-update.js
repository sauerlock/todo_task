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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"519725102dce\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MTk3MjUxMDJkY2VcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./app/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_utils_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/menu */ \"(app-pages-browser)/./app/utils/menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/context/globalProvider */ \"(app-pages-browser)/./app/context/globalProvider.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n    width: \",\n        \";\\n    background-color: \",\n        \";\\n    border: 3px solid \",\n        \";\\n    border-radius: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    color: red;\\n      \\n    .profile {\\n        margin: 1.5rem;\\n        padding: 1rem 1.5rem;\\n        position: relative;\\n        border-radius: 1rem;\\n        cursor: pointer;\\n        font-weight: 300;\\n        color: darkred;\\n        display: flex;\\n        align-items: center;\\n        \\n        .profile-overlay {\\n            position: absolute;\\n            top: 0;\\n            left: 0;\\n            width: 100%;\\n            height: 100%;\\n            backdrop-filter: blur(10px);\\n            z-index: 1;\\n            background: darblue;\\n            transition: all 0.55s liner;\\n            border-radius: 1rem;\\n            border: 1px solid \",\n        ';\\n            opacity: 0.2;\\n        }\\n\\n        h1 {\\n            font-size: 1.2rem;\\n            display: flex;\\n            flex-direction: column;\\n            line-height: 1.4rem;\\n        }\\n\\n        .image, \\n        h1 {\\n            position: relative;\\n            z-index: 1;\\n        }\\n        \\n        .image {\\n            flex-shrink: 0;\\n            display: inline-block;\\n            overflow: hidden;\\n            transition: all 0.5s ease;\\n            border-radius: 100%;\\n\\n            width: 70px;\\n            height: 70px;\\n\\n            img {\\n              border-radius: 100%;\\n              transition: all 0.5s ease;\\n            }\\n        }\\n        \\n        > h1 {\\n            margin-left: 0.8rem;\\n            font-size: clamp(1.2rem, 4vw, 1.4rem); \\n            line-height: 100%;\\n        }\\n\\n        &:hover {\\n            .profile-overlay {\\n                opacity: 1;\\n                background: #2b2a2a;\\n                border: 1px solid red;\\n                transition: all 0.40s ease;\\n            }\\n    \\n            .image {\\n                transform: scale(1.2);\\n            }\\n\\n            h1 {\\n                color: red;\\n                font-weight: 200;\\n                transition: all 0.40s ease;\\n            }\\n        }\\n    }\\n    \\n    .nav-item {\\n        position: relative;\\n        padding: 0.8rem 1rem 0.9rem 2.1rem;\\n        margin: 0.4rem 0;\\n        display: grid;\\n        grid-template-columns: 40px 1fr;\\n        cursor: pointer;\\n        align-items: center;\\n\\n        &::after {\\n            position: absolute;\\n            content: \"\";\\n            left: 0;\\n            top: 0;\\n            width: 0;\\n            height: 100%;\\n            background-color: ',\n        ';\\n            z-index: 1;\\n            transition: all 0.3s ease-in-out;\\n        }\\n\\n        &::before {\\n            position: absolute;\\n            content: \"\";\\n            right: 0;\\n            top: 0;\\n            width: 0%;\\n            height: 100%;\\n            background-color: red;\\n            border-bottom-left-radius: 5px;\\n            border-top-left-radius: 5px;\\n        }\\n\\n        a {\\n            font-weight: 500;\\n            transition: all 0.3s ease-in-out;\\n            z-index: 2;\\n            line-height: 0;\\n            color: darkred;\\n        }\\n\\n        i {\\n            display: flex;\\n            align-items: center;\\n            color: darkred;\\n        }\\n        &:hover {\\n            &::after {\\n                width:100%;\\n            }\\n        }\\n    }\\n    .active {\\n        background-color: ',\n        \";\\n        \\n        i,\\n        a{\\n            color: red;\\n        }\\n    }\\n    .active::before{\\n        width: 0.3rem;\\n    }\\n\\n    >button{\\n        1.5rem;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Sidebar() {\n    _s();\n    const { theme } = (0,_app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const handleClick = (link)=>{\n        router.push(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SidebarStyled, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"profile\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"profile-overlay\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            width: 70,\n                            height: 70,\n                            src: \"/vader.jpeg\",\n                            alt: \"profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Darth\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                children: \"Vader\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"nav-items\",\n                children: _app_utils_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map((item)=>{\n                    const link = item.link;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        className: \"nav-item \".concat(pathName === link ? \"active\" : \"\"),\n                        onClick: ()=>{\n                            handleClick(link);\n                        },\n                        children: [\n                            item.icon,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: link,\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\appTodoList\\\\todo_task\\\\app\\\\components\\\\Sidebar\\\\Sidebar.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Sidebar, \"l1udeEwo62BAy06/JpoXnkFa9sQ=\", false, function() {\n    return [\n        _app_context_globalProvider__WEBPACK_IMPORTED_MODULE_7__.useGlobalState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Sidebar;\nconst SidebarStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nav(_templateObject(), (props)=>props.theme.sidebarWidth, (props)=>props.theme.colorBg3, (props)=>props.theme.borderColor, (props)=>props.theme.colorBg1, (props)=>props.theme.activeNavLinkHover, (props)=>props.theme.colorBg3);\n_c1 = SidebarStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidebar\");\n$RefreshReg$(_c1, \"SidebarStyled\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDYTtBQUNSO0FBQ0s7QUFDUDtBQUM0QjtBQUNLO0FBRTlELFNBQVNROztJQUNMLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGLDJFQUFjQTtJQUNoQyxNQUFNRyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssV0FBV04sNERBQVdBO0lBQzVCLE1BQU1PLGNBQWMsQ0FBQ0M7UUFDakJILE9BQU9JLElBQUksQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0U7UUFBY04sT0FBT0E7OzBCQUNsQiw4REFBQ087Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2Ysa0RBQUtBOzRCQUFDZ0IsT0FBTzs0QkFBSUMsUUFBUTs0QkFBSUMsS0FBSTs0QkFBY0MsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXhELDhEQUFDQzs7MENBQ0csOERBQUNDOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNBOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNDO2dCQUFHUCxXQUFVOzBCQUNUZCx1REFBSUEsQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDQztvQkFDUCxNQUFNYixPQUFPYSxLQUFLYixJQUFJO29CQUN0QixxQkFDQSw4REFBQ2M7d0JBQ0dWLFdBQVcsWUFBOEMsT0FBbENOLGFBQWFFLE9BQU8sV0FBVzt3QkFDdERlLFNBQVM7NEJBQ1RoQixZQUFZQzt3QkFDaEI7OzRCQUNLYSxLQUFLRyxJQUFJOzBDQUNWLDhEQUFDekIsaURBQUlBO2dDQUFDMEIsTUFBTWpCOzBDQUFPYSxLQUFLSyxLQUFLOzs7Ozs7Ozs7Ozs7Z0JBR3JDOzs7Ozs7MEJBRUosOERBQUNDOzs7Ozs7Ozs7OztBQUdiO0dBdENTeEI7O1FBQ2FELHVFQUFjQTtRQUNqQkQsc0RBQVNBO1FBQ1BELHdEQUFXQTs7O0tBSHZCRztBQXdDVCxNQUFNTyxnQkFBZ0JkLHlEQUFNQSxDQUFDZ0MsR0FBRyxvQkFFbkIsQ0FBQ0MsUUFBVUEsTUFBTXpCLEtBQUssQ0FBQzBCLFlBQVksRUFDeEIsQ0FBQ0QsUUFBVUEsTUFBTXpCLEtBQUssQ0FBQzJCLFFBQVEsRUFDL0IsQ0FBQ0YsUUFBVUEsTUFBTXpCLEtBQUssQ0FBQzRCLFdBQVcsRUE2QjFCLENBQUNILFFBQVVBLE1BQU16QixLQUFLLENBQUM2QixRQUFRLEVBMkUvQixDQUFDSixRQUFVQSxNQUFNekIsS0FBSyxDQUFDOEIsa0JBQWtCLEVBcUM3QyxDQUFDTCxRQUFVQSxNQUFNekIsS0FBSyxDQUFDMkIsUUFBUTtNQWpKckRyQjtBQWtLTiwrREFBZVAsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4P2QyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCJAL2FwcC91dGlscy9tZW51XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwiQC9hcHAvY29udGV4dC9nbG9iYWxQcm92aWRlclwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUdsb2JhbFN0YXRlKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGxpbms6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2gobGluayk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGViYXJTdHlsZWQgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NzB9IGhlaWdodD17NzB9IHNyYz1cIi92YWRlci5qcGVnXCIgYWx0PVwicHJvZmlsZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhcnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlZhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBpdGVtLmxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7cGF0aE5hbWUgPT09IGxpbmsgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cclxuICAgICAgICA8L1NpZGViYXJTdHlsZWQ+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyU3R5bGVkID0gc3R5bGVkLm5hdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvckJnM307XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYm9yZGVyQ29sb3J9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgICAgXHJcbiAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9maWxlLW92ZXJsYXkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41NXMgbGluZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvckJnMX07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2UsIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgID4gaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgNHZ3LCAxLjRyZW0pOyBcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLnByb2ZpbGUtb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJiMmEyYTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjQwcyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40MHMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdi1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDFyZW0gMC45cmVtIDIuMXJlbTtcclxuICAgICAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmFjdGl2ZU5hdkxpbmtIb3Zlcn07XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvckJnM307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSxcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmU6OmJlZm9yZXtcclxuICAgICAgICB3aWR0aDogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgID5idXR0b257XHJcbiAgICAgICAgMS41cmVtO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1hZ2UiLCJtZW51IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwidXNlR2xvYmFsU3RhdGUiLCJTaWRlYmFyIiwidGhlbWUiLCJyb3V0ZXIiLCJwYXRoTmFtZSIsImhhbmRsZUNsaWNrIiwibGluayIsInB1c2giLCJTaWRlYmFyU3R5bGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJpY29uIiwiaHJlZiIsInRpdGxlIiwiYnV0dG9uIiwibmF2IiwicHJvcHMiLCJzaWRlYmFyV2lkdGgiLCJjb2xvckJnMyIsImJvcmRlckNvbG9yIiwiY29sb3JCZzEiLCJhY3RpdmVOYXZMaW5rSG92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Sidebar/Sidebar.tsx\n"));

/***/ })

});